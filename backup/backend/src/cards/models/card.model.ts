import { Field, ObjectType } from "@nestjs/graphql";
import graphqlTypeJson from "graphql-type-json";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { DeckModel } from "../../decks/models/deck.model";

@ObjectType()
@Entity({ name: "cards" })
export class CardModel {
  @Field({ nullable: false })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field({ nullable: false })
  @Column({ nullable: true, name: "deck_id" })
  deckId: string;

  @Field({ nullable: false })
  @CreateDateColumn({
    type: "timestamp with time zone",
    default: () => "CURRENT_TIMESTAMP(6)",
    name: "created_at",
  })
  createdAt: Date;

  @Field({ nullable: false })
  @UpdateDateColumn({
    type: "timestamp with time zone",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
    name: "updated_at",
  })
  updatedAt: Date;

  @Field({nullable: true})
  @Column("varchar", { length: 255, name: "front", nullable: true })
  front?: string;

  @Field({ nullable: true })
  @Column("varchar", { length: 255, name: "back", nullable: true })
  back?: string;

  @Field({ nullable: true })
  @Column("int", { name: "score", nullable: true, default: 0 })
  score?: number;

  @Field({ nullable: true })
  @Column("int", { name: "times_practiced", nullable: true, default: 0 })
  timesPracticed?: number;
  
  @Field({ nullable: true })
  @Column("int", { name: "level", nullable: true, default: 0 })
  level?: number;

  @Field({ nullable: true })
  @Column("timestamp", { nullable: true, name: "last_practiced_at", default: () => "CURRENT_TIMESTAMP(6)" })
  lastPracticedAt?: Date;
  
  @Field({ nullable: true })
  @Column("timestamp", { nullable: true, name: "due_date", default: () => "CURRENT_TIMESTAMP(6)" })
  dueDate?: Date;

  @Field(() => DeckModel)
  @ManyToOne(() => DeckModel, (deck) => deck.cards, { onDelete: "CASCADE" })
  @JoinColumn({ name: "deck_id" })
  deck: DeckModel;
}
