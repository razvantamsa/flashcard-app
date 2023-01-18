import { Field, ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Languages } from "../../constants";

import { UserModel } from "./user.model";

@ObjectType()
@Entity({ name: "user_settings" })
export class UserSettingsModel {
  @Field({ nullable: false })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field({ nullable: true })
  @Column("boolean", { default: true, name: "dark_theme" })
  darkTheme?: boolean;

  @Field((type) => Languages, { nullable: true })
  @Column({ type: "enum", enum: Languages, default: Languages.en, name: "language" })
  language?: Languages;

  @Column({ name: "user_id" })
  userID: string;

  @Field(() => UserModel)
  @OneToOne(() => UserModel, (user) => user.settings, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: UserModel;
}
