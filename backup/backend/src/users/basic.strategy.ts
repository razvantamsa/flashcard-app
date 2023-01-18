import { BasicStrategy as Strategy } from "passport-http";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ConfigService } from "@nestjs/config";
import { InjectPinoLogger, PinoLogger } from "nestjs-pino";

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectPinoLogger(BasicStrategy.name)
    private readonly logger: PinoLogger,
    private readonly configService: ConfigService
  ) {
    super({
      passReqToCallback: true
    });
  }

  public validate = async (req, username: string, password: string): Promise<boolean> => {
    console.log("validaing",username,password);
    this.logger.debug({ username, password }, "Trying to sign in as admin");
    if (
      this.configService.get<string>("ADMIN_HTTP_BASIC_USER") === username &&
      this.configService.get<string>("ADMIN_HTTP_BASIC_PASS") === password
    ) {
      return true;
    }

    throw new UnauthorizedException();
  };
}
