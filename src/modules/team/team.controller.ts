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
import { AuthGuard } from "@nestjs/passport";
import { TeamService } from "./team.service";
import { UserRole } from "../../data/schemas/person.schema";
import { TeamRole } from "../../data/schemas/team.schema";

@Controller("team")
export class TeamController {

  constructor(private readonly service: TeamService) {
  }

  @Get()
  @UseGuards(AuthGuard("jwt"))
  async fetchAll(@Req() req) {
    const checkManager = await this.service.findByUserId(req.user._id);
    if (req.user.role === UserRole.Admin || checkManager.role === TeamRole.Manager) {
      return this.service.fetch();
    }
    throw new UnauthorizedException();
  }

  @Get("company/:id")
  @UseGuards(AuthGuard("jwt"))
  async getCompanyTeamByCompanyId(@Param("id") id: string, @Req() req) {


    const checkManager = await this.service.findByUserId(req.user._id);

    if (req.user.role === UserRole.Admin || checkManager.role === TeamRole.Manager) {
      return this.service.getCompanyTeam(id);
    }
    throw new UnauthorizedException();
  }

  @Get("getone/:id")
  @UseGuards(AuthGuard("jwt"))
  async fetchOne(@Param("id") id: string, @Req() req) {

    const checkManager = await this.service.findByUserId(req.user._id);

    if (req.user.role === UserRole.Admin || checkManager.role === TeamRole.Manager) {
      return this.service.fetch(id);
    }
    throw new UnauthorizedException();
  }

  ///TODO: There should be no underscore in all the modules routes: Follow and Read https://restfulapi.net/resource-naming/
  @Get("accounts_team")
  @UseGuards(AuthGuard("jwt"))
  getAccountsTeam() {
    return this.service.getAccountTeam();
  }

  @Post()
  @UseGuards(AuthGuard("jwt"))
  async create(@Body() data: any, @Req() req) {
    const checkManager = await this.service.findByUserId(req.user._id);

    if (req.user.role === UserRole.Admin || checkManager.role === TeamRole.Manager) {
      return this.service.create(data);
    }
    throw new UnauthorizedException();
  }

  @Patch(":id")
  @UseGuards(AuthGuard("jwt"))
  async update(@Param("id") id: string, @Body() data: any, @Req() req) {
    const checkManager = await this.service.findByUserId(req.user._id);

    if (req.user.role === UserRole.Admin || checkManager.role === TeamRole.Manager) {
      return this.service.update(id, data);
    }
    throw new UnauthorizedException();
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  async delete(@Param("id") id: string, @Req() req) {

    const checkManager = await this.service.findByUserId(req.user._id);

    if (req.user.role === UserRole.Admin || checkManager.role === TeamRole.Manager) {
      return this.service.delete(id);
    }
    throw new UnauthorizedException();
  }


}
