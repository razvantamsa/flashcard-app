import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtSecretRequestType } from "@nestjs/jwt";
import { PassportStrategy } from "@nestjs/passport";
import * as jwt from "jsonwebtoken";
import { ExtractJwt, Strategy } from "passport-jwt";

import { JwtPayload } from "../common/interfaces/jwt-payload.interface";
import { UsersService } from "./users.service";
import { UserModel } from "./models/user.model";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService, private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKeyProvider: (
        requestType: JwtSecretRequestType,
        tokenOrPayload: string | Object | Buffer,
        done: Function
      ) => {
        const globalJWTSecret = configService.get<string>("JWT_ACCESS_TOKEN_SECRET");

        const payload = tokenOrPayload instanceof Object ? tokenOrPayload : jwt.decode(tokenOrPayload.toString());
        // eslint-disable-next-line @typescript-eslint/dot-notation
        if (!payload || !payload["id"]) {
          return globalJWTSecret;
        }

        // eslint-disable-next-line no-void
        void userService
          .getById(payload["id"]) // eslint-disable-line @typescript-eslint/dot-notation
          .then((user: UserModel) => {
            done(null, `${globalJWTSecret}-${user.email}-${user.password}`);
          })
          .catch(() => done(null, ""));
      }
    });
  }

  async validate(payload: JwtPayload, done: Function): Promise<any> {
    const user = await this.userService.validateUser(payload);
    if (!user) {
      return done(new UnauthorizedException(), false);
    }
    done(null, user);
  }
}
