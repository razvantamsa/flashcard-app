import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { InjectPinoLogger, PinoLogger } from "nestjs-pino";
import { isEmpty, isNil, not } from "ramda";

import { GqlAuthGuard } from "./../users/gqlauthguard";
import { User as CurrentUser } from "./../users/users.decorator";
import { MutationStatus } from "../constants";
import { GenericResponseType } from "../common/types/generic-response.type";

import { CreateDeckInput } from "./input/createDeck.input";
import { EditDeckInput } from "./input/editDeck.input";

import { UserModel } from "./../users/models/user.model";
import { DeckModel } from "./models/deck.model";

import { DecksService } from "./decks.service";
import { CardsService } from "./../cards/cards.service";

@Resolver((of) => DeckModel)
export class DecksResolver {
  constructor(
    @InjectPinoLogger(DecksResolver.name)
    private readonly logger: PinoLogger,
    private readonly decksService: DecksService,
    private readonly cardsService: CardsService
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query((returns) => [DeckModel], { name: "listByUserId", nullable: true })
  async listByUserId(@CurrentUser() user: UserModel): Promise<DeckModel[]> {
    return await this.decksService.listByUserId(user.id);
  }

  @UseGuards(GqlAuthGuard)
  @Query((returns) => DeckModel, { name: "getDeckById", nullable: true })
  async getById(@Args("id") id: string): Promise<DeckModel> {
    return await this.decksService.getById(id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => DeckModel, { name: "createDeck", nullable: true })
  async createDeck(
    @Args("createDeckInput") createDeckInput: CreateDeckInput,
    @CurrentUser() user: UserModel
  ): Promise<DeckModel> {
    return await this.decksService.createDeck(createDeckInput, user.id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => DeckModel, { name: "editDeck", nullable: true })
  async editDeck(
    @Args("editDeckInput") editDeckInput: EditDeckInput,
    @Args("deckId") deckId: string
  ): Promise<DeckModel> {
    return await this.decksService.editDeck(editDeckInput, deckId);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => GenericResponseType, {
    name: "deleteDecksByUserId",
    nullable: true,
  })
  async deleteDecks(
    @CurrentUser() user: UserModel
  ): Promise<GenericResponseType> {
    const result = await this.decksService.deleteDecksByUserId(user.id);

    return {
      status: not(isNil(result) || isEmpty(result))
        ? MutationStatus.SUCCESS
        : MutationStatus.FAILED,
    };
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => GenericResponseType, {
    name: "deleteDeck",
    nullable: true,
  })
  async deleteDeck(@Args("id") id: string): Promise<GenericResponseType> {
    const result = await this.decksService.deleteDeck(id);

    return {
      status: result
        ? MutationStatus.SUCCESS
        : MutationStatus.FAILED,
    };
  }

  @ResolveField((returns) => Number, { name: "deckCount", nullable: true })
  async getCardsCount(@Parent() deck: DeckModel): Promise<number> {
    return await this.cardsService.getCardCount(deck.id);
  }

  @ResolveField((returns) => Number, { name: "deckAccuracy", nullable: true })
  async getAccuracy(@Parent() deck: DeckModel): Promise<number> {
    return await this.cardsService.getDeckAccuracy(deck.id);
  }
}
