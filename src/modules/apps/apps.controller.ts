import {
  Body,
  Controller, Delete,
  Get,
  Param, Patch,
  Post,
  Req,
  UnauthorizedException,
  UploadedFile,
  UseGuards,
  UseInterceptors
} from "@nestjs/common";
import { JwtAuthGuard } from "../../data/utilities/auth/jwt-auth.guard";
import { TeamRole } from "../../data/schemas/team.schema";
import { UserRole } from "../../data/schemas/user.schema";
import { FileInterceptor } from "@nestjs/platform-express";
import { AppsService } from "./apps.service";
import { TeamService } from "../team/team.service";

@Controller('apps')
export class AppsController {

  constructor(private readonly service:AppsService,private readonly TeamService:TeamService) {
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async fetchAll(@Req() req){
    console.log(req.user.role);
    // const teamManager = await this.TeamService.findByUserId(req.user._id);
    // console.log(teamManager);
    if (req.user.role===UserRole.Admin){
      return this.service.fetch();
    }
    throw new UnauthorizedException();
  }

  @Get(':id')
  fetchOne(@Param('id') id:string){
    return this.service.fetch(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() data : any){
      return this.service.create(data);
  }

  @Patch(':id')
  async update(@Param('id') id:string,@Body() data:any){
    return this.service.update(id,data);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id:string,@Req() req)
  {
    if (req.user.role===UserRole.Admin){
      return this.service.delete(id);
    }
    throw new UnauthorizedException();
  }


}
