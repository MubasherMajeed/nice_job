import { JwtService } from "@nestjs/jwt";
import { Injectable } from "@nestjs/common";
import { PersonService } from "../../modules/person/person.service";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: PersonService
  ) {
  }

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.fetchByUsername(username, pass);

    if (user) {
      return user;
    }

    return null;
  }

  async signIn(user: any) {
    return {
      access_token: await this.jwtService.signAsync({
        username: user.username,
        sub: user._id
      })
    };
  }

  async profile(user: any) {
    return await this.usersService.fetch(user.userId);
  }
}
