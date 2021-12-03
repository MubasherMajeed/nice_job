import { Controller, Get, Post, UseGuards, Request, Req } from "@nestjs/common";
import { AppService } from './app.service';
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./data/utilities/auth/auth.service";
import { JwtAuthGuard } from "./data/utilities/auth/jwt-auth.guard";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private readonly  authService:AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('local'))
  @Post("login")
  login(@Request() req){
      return this.authService.login(req.user._doc);
  }


  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Request() req){
      return req.user;
  }

}

