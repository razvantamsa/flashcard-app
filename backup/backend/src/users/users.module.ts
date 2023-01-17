import { PinoLogger } from "nestjs-pino";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService, ConfigModule } from "@nestjs/config";

import { JwtStrategy } from "./jwt.strategy";
import { BasicStrategy } from "./basic.strategy";
import { CommonModule } from "../common/common.module";

import { UserModel } from "./models/user.model";
import { DeckModel } from "../decks/models/deck.model";
import { UserSettingsModel } from "./models/settings.model";

import { UsersService } from "./users.service";
import { DecksService } from "../decks/decks.service";
import { UserSettingsService } from "./settings.service";

import { UsersResolver } from "./users.resolver";
import { UserSettingsResolver } from "./settings.resolver";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserModel, DeckModel, UserSettingsModel]),
    CommonModule,
    ConfigModule,
  ],
  providers: [UsersResolver, UsersService, UserSettingsResolver, UserSettingsService, ConfigService, DecksService, JwtStrategy, BasicStrategy],
  exports: [TypeOrmModule.forFeature([UserModel]), UsersService],
})
export class UsersModule {}
