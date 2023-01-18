import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { isEmpty, isNil, not } from "ramda";
import { InjectPinoLogger, PinoLogger } from "nestjs-pino";

import { LanguageProg } from "../constants";
import { CreateDeckInput } from "./input/createDeck.input";

import { EditDeckInput } from "./input/editDeck.input";

import { DeckModel } from "./models/deck.model";

@Injectable()
export class DecksService {
  private readonly chargebee: any;

  constructor(
    @InjectPinoLogger(DecksService.name)
    private readonly logger: PinoLogger,
    @InjectRepository(DeckModel)
    private readonly deckRepository: Repository<DeckModel>
  ) {}

  async listByUserId(userId: string): Promise<DeckModel[]> {
    return await this.deckRepository.find({ where: { userId } });
  }

  async getById(id: string): Promise<DeckModel> {
    return await this.deckRepository.findOne({ where: { id } });
  }

  async getDeckCount(userId: string): Promise<number> {
    return await this.deckRepository.count({ where: { userId } });
  }

  async getLanguagesAccuracy(userId: string): Promise<LanguageProg[]> {
    return await this.deckRepository
      .createQueryBuilder("decks")
      .leftJoin("decks.cards", "cards")
      .select("decks.language")
      .addSelect("sum(cards.accuracy) as score")
      .where("decks.userId = :userId", { userId })
      .groupBy("decks.language")
      .getRawMany();
  }

  async createDeck(createData: CreateDeckInput, userId: string): Promise<DeckModel> {
    return await this.deckRepository.save({ ...createData ,userId: userId});
  }

  async editDeck(editData: EditDeckInput, deckId: string): Promise<DeckModel> {
    const deck = await this.getById(deckId);
    
    if (deck == null) {
      return null;
    }

    const result = await this.deckRepository.update(deckId, { ...editData, });
    
    return result ? await this.getById(deckId) : null;
  }

  async deleteDecksByUserId(userId: string): Promise<boolean> {
    const deletedDecks = await this.deckRepository.delete({ userId });
    return not(isNil(deletedDecks) || isEmpty(deletedDecks));
  }

  async deleteDeck(id: string): Promise<boolean> {
    const deletedDeck = await this.deckRepository.delete({ id });
    return not(isNil(deletedDeck) || isEmpty(deletedDeck));
  }
}
