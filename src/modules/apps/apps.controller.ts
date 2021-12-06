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
import { AppsService } from "./apps.service";
import { TeamService } from "../team/team.service";
import { UserRole } from "../../data/schemas/person.schema";

@Controller("apps")
export class AppsController {
  ///TODO: Remove extra services which is not used
  constructor(private readonly service: AppsService, private readonly TeamService: TeamService) {
  }

  @Get()
  @UseGuards(AuthGuard("jwt"))
  async fetchAll(@Req() req) {
    console.log(req.user.role);
    // const teamManager = await this.TeamService.findByUserId(req.person._id);
    // console.log(teamManager);
    if (req.user.role === UserRole.Admin) {
      return this.service.fetch();
    }
    throw new UnauthorizedException();
  }

  @Get(":id")
  fetchOne(@Param("id") id: string) {
    return this.service.fetch(id);
  }

  @Post()
  @UseGuards(AuthGuard("jwt"))
  async create(@Body() data: any) {
    return this.service.create(data);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() data: any) {
    return this.service.update(id, data);
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  delete(@Param("id") id: string, @Req() req) {
    if (req.user.role === UserRole.Admin) {
      return this.service.delete(id);
    }
    throw new UnauthorizedException();
  }
}
