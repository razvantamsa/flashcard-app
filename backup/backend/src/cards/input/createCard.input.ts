import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateCardInput {
  @Field({nullable: true})
  front?: string;

  @Field({ nullable: true })
  back?: string;

  @Field({ nullable: true })
  deckId?: string;
}
