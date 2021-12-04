import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UnauthorizedException,
  UseGuards
} from "@nestjs/common";
import { TeamService } from "./team.service";
import { JwtAuthGuard } from "../../data/utilities/auth/jwt-auth.guard";
import { UserRole } from "../../data/schemas/user.schema";
import { TeamRole } from "../../data/schemas/team.schema";

@Controller("team")
export class TeamController {

  constructor(private readonly service: TeamService) {
  }

  @Get()
  @UseGuards(JwtAuthGuard)
   async fetchAll(@Req() req) {
    const checkManager = await this.service.findByUserId(req.user._id);
    if (req.user.role === UserRole.Admin|| checkManager.role === TeamRole.Manager) {
      return this.service.fetch();
    }
    throw new UnauthorizedException();
  }

  @Get("company/:id")
  @UseGuards(JwtAuthGuard)
  async getCompanyTeamByCompanyId(@Param("id") id: string,@Req() req) {


    const checkManager = await this.service.findByUserId(req.user._id);

    if (req.user.role === UserRole.Admin|| checkManager.role === TeamRole.Manager) {
      return this.service.getCompanyTeam(id);
    }
    throw new UnauthorizedException();
  }

  @Get("getone/:id")
  @UseGuards(JwtAuthGuard)
  async fetchOne(@Param("id") id: string,@Req() req) {

    const checkManager = await this.service.findByUserId(req.user._id);

    if (req.user.role === UserRole.Admin|| checkManager.role === TeamRole.Manager) {
      return this.service.fetch(id);
    }
    throw new UnauthorizedException();
  }

  @Get("accounts_team")
  @UseGuards(JwtAuthGuard)
  getAccountsTeam() {
    return this.service.getAccountTeam();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() data: any, @Req() req) {
    const checkManager = await this.service.findByUserId(req.user._id);

    if (req.user.role === UserRole.Admin || checkManager.role === TeamRole.Manager) {
      return this.service.create(data);
    }
    throw new UnauthorizedException();
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  async update(@Param("id") id: string, @Body() data: any, @Req() req) {
    const checkManager = await this.service.findByUserId(req.user._id);

    if (req.user.role === UserRole.Admin || checkManager.role === TeamRole.Manager) {
      return this.service.update(id, data);
    }
    throw new UnauthorizedException();
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  async delete(@Param("id") id: string, @Req() req) {

    const checkManager = await this.service.findByUserId(req.user._id);

    if (req.user.role === UserRole.Admin || checkManager.role === TeamRole.Manager) {
      return this.service.delete(id);
    }
    throw new UnauthorizedException();
  }


}
