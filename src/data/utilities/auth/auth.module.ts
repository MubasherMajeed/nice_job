import { Module } from '@nestjs/common';
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { JwtModule } from "@nestjs/jwt";
import { JwtConstants } from "./constants";
import { JwtStrategy } from "./jwt.strategy";
import { UserModule } from "../../../modules/user/user.module";

@Module({
  imports:[UserModule, PassportModule,JwtModule.register({
    secret:JwtConstants.secret,
    signOptions:{expiresIn: '24h'}
  })],
  providers: [AuthService,LocalStrategy,JwtStrategy],
  exports:[AuthService]

})
export class AuthModule {}

