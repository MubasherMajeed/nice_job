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
  UploadedFile,
  UseGuards,
  UseInterceptors
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CompanyService } from "./company.service";
import { TeamService } from "../team/team.service";
import { TeamRole } from "../../data/schemas/team.schema";
import { FileInterceptor } from "@nestjs/platform-express";
import { UserRole } from "../../data/schemas/person.schema";

@Controller("company")
export class CompanyController {
  constructor(private readonly service: CompanyService, private readonly TeamService: TeamService) {
  }

  @Get()
  @UseGuards(AuthGuard("jwt"))
  async fetchAll(@Req() req) {
    const teamManager = await this.TeamService.findByUserId(req.user._id);
    if (teamManager.role === TeamRole.Manager || req.user.role === UserRole.Admin) {
      return this.service.fetch();
    }
  }

  @Get(":id")
  fetchOne(@Param("id") id: string) {
    return this.service.fetch(id);
  }

  @Post()
  @UseGuards(AuthGuard("jwt"))
  @UseInterceptors(FileInterceptor("logo_name"))
  async create(@Body() data: any, @Req() req, @UploadedFile() logo: Express.Multer.File) {
    if (req.user.role === UserRole.Admin) {
      if (logo) {
        data.logo_name = logo.filename;
        console.log(logo.filename);
        data.logo_path = logo.path;
      }
      return this.service.create(data);
    }
    throw new UnauthorizedException();
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() data: any, @Req() req) {

    const teamManager = await this.TeamService.findByUserId(req.user._id);
    if (teamManager.role === TeamRole.Manager || req.user.role === UserRole.Admin) {
      return this.service.update(id, data);
    }
    throw new UnauthorizedException();
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