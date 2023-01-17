import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class EditCardInput {
  @Field({nullable: true})
  front?: string;

  @Field({ nullable: true })
  back?: string;

  @Field({ nullable: true })
  score?: number;

  @Field({ nullable: true })
  timesPracticed?: number;
  
  @Field({ nullable: true })
  level?: number;

  @Field({ nullable: true })
  lastPracticedAt?: Date;
  
  @Field({ nullable: true })
  dueDate?: Date;
}
