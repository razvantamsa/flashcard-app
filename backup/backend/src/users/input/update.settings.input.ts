import { Field, InputType } from "@nestjs/graphql";
import { Languages } from "../../constants";

@InputType()
export class UpdateSettingsInput {
  @Field({ nullable: true })
  darkTheme?: boolean;

  @Field((type) => Languages, { nullable: true })
  language?: Languages;
}
