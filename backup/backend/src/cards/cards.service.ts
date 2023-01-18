import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {  Repository } from "typeorm";
import { isEmpty, isNil, not } from "ramda";
import { InjectPinoLogger, PinoLogger } from "nestjs-pino";

import { CreateCardInput } from "./input/createCard.input";

import { EditCardInput } from "./input/editCard.input";

import { CardModel } from "./models/card.model";

@Injectable()
export class CardsService {
  constructor(
    @InjectPinoLogger(CardsService.name)
    private readonly logger: PinoLogger,
    @InjectRepository(CardModel)
    private readonly cardRepository: Repository<CardModel>
  ) {}

  async listByDeckId(deckId: string): Promise<CardModel[]> {
    return await this.cardRepository.find({ where: { deckId } });
  }

  async getById(id: string): Promise<CardModel> {
    return await this.cardRepository.findOne({ where: { id } });
  }

  async getCardCount(deckId: string): Promise<number> {
    return await this.cardRepository.count({ where: { deckId } });
  }

  async getDeckAccuracy(deckId: string): Promise<number> {
    const result = await this.cardRepository
      .createQueryBuilder("cards")
      .select("case when sum(cards.times_practiced) > 0 then (sum(cards.score)/sum(cards.times_practiced))/count(cards.id) else 0 end as accuracy")
      .where("cards.deckId = :deckId", { deckId })
      .getRawOne();
    
    return result.accuracy;
  }

  async createCard(createData: CreateCardInput): Promise<CardModel> {
    return await this.cardRepository.save(createData);
  }

  async editCard(editData: EditCardInput, cardId: string): Promise<CardModel> {
    const card = await this.getById(cardId);
    if (card == null) {
      return null;
    }
    
    const result = await this.cardRepository.update(cardId, { ...editData });

    return result ? await this.getById(cardId) : null;
  }

  async deleteCardsByDeckId(deckId: string): Promise<boolean> {
    const deletedCards = await this.cardRepository.delete({ deckId });
    return not(isNil(deletedCards) || isEmpty(deletedCards));
  }

  async deleteCard(id: string): Promise<boolean> {
    const deletedCard = await this.cardRepository.delete({ id });
    return not(isNil(deletedCard) || isEmpty(deletedCard));
  }
}
