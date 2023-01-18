import { HttpException, HttpStatus, UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserModel } from "./models/user.model";
import { GqlAuthGuard } from "./gqlauthguard";
import { User as CurrentUser } from "./users.decorator";

import { UserSettingsModel } from "./models/settings.model";
import { UserSettingsService } from "./settings.service";
import { UpdateSettingsInput } from "./input/update.settings.input";
// import { ContactUsInput } from "./input/contactUs.input";

import { GenericResponseType } from "../common/types/generic-response.type";

import { MutationStatus } from "../constants";

@Resolver((of) => UserSettingsModel)
export class UserSettingsResolver {
  constructor(private readonly settingsService: UserSettingsService) {}

  @UseGuards(GqlAuthGuard)
  @Query((returns) => UserSettingsModel)
  async getUserSettings(@CurrentUser() user: UserModel): Promise<UserSettingsModel> {
    return await this.settingsService.list(user.id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => UserSettingsModel, { name: "updateUserSettings", nullable: true })
  async updateUserSettings(
    @Args("input") updateUserSettingsData: UpdateSettingsInput,
    @CurrentUser() user: UserModel
  ): Promise<UserSettingsModel> {
    return await this.settingsService.update(user.id, updateUserSettingsData);
  }

  // @UseGuards(GqlAuthGuard)
  // @Mutation((returns) => GenericResponseType, { name: "contactUs", nullable: true })
  // async contactUs(
  //   @Args("input") contactUsData: ContactUsInput,
  //   @CurrentUser() user: UserModel
  // ): Promise<GenericResponseType> {
  //   const result = await this.settingsService.contactUs(contactUsData);

  //   if (!result) {
  //     throw new HttpException("Error sending the message. Try again!", HttpStatus.INTERNAL_SERVER_ERROR);
  //   }

  //   return { status: MutationStatus.SUCCESS };
  // }
}
