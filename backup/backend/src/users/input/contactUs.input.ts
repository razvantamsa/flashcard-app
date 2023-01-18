import { Field, InputType } from "@nestjs/graphql";
import { ContactUsCategories } from "../../constants";

@InputType()
export class ContactUsInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  message: string;

  @Field((type) => ContactUsCategories, { nullable: false })
  category: ContactUsCategories;

  @Field({ nullable: true, defaultValue: false })
  wantsNewsletter?: boolean;
}
