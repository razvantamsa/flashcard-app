import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MailerService } from "@nestjs-modules/mailer";
import { ConfigService } from "@nestjs/config";
import { Repository } from "typeorm";

import { allowedContactUsCategories, ContactUsCategories } from "../constants";
import { ContactUsInput } from "./input/contactUs.input";
import { UpdateSettingsInput } from "./input/update.settings.input";

import { UserSettingsModel } from "./models/settings.model";
import { UserModel } from "./models/user.model";


@Injectable()
export class UserSettingsService {
  constructor(
    @InjectRepository(UserSettingsModel)
    private readonly settingsRepository: Repository<UserSettingsModel>,
    @InjectRepository(UserModel)
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService
  ) {}

  async list(userID: string): Promise<UserSettingsModel> {
    return await this.settingsRepository.findOne({
      where: {
        userID
      }
    });
  }

  async update(userID: string, updateSettings: UpdateSettingsInput): Promise<UserSettingsModel> {
    const result = await this.settingsRepository
      .createQueryBuilder()
      .update(UserSettingsModel)
      .set({ ...updateSettings })
      .where("userID = :id", { id: userID })
      .execute();

    if (!result) {
      return null;
    }
    return await this.list(userID);
  }

  async contactUs(contactUsData: ContactUsInput): Promise<boolean> {
    const category = allowedContactUsCategories[Object.values(ContactUsCategories)[contactUsData.category]];

    await this.mailerService.sendMail({
      to: this.configService.get("MAIL_DEFAULT_CONTACT"),
      from: this.configService.get("MAIL_NOREPLY"),
      subject: `[${category}] Contact Us`,
      template: "contactUs.ejs",
      context: {
        MESSAGE: contactUsData.message,
        USER: contactUsData.name,
        EMAIL: contactUsData.email
      }
    });

    await this.mailerService.sendMail({
      to: contactUsData.email,
      from: this.configService.get("MAIL_NOREPLY"),
      subject: `[${category}] We've received your message`,
      template: "contactUs-reply.ejs",
      context: {
        USER: contactUsData.name
      }
    });

    return true;
  }
}
