import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post, Req, UnauthorizedException,
  UploadedFile,
  UseGuards,
  UseInterceptors
} from "@nestjs/common";
import { CompanyService } from "./company.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { JwtAuthGuard } from "../../data/utilities/auth/jwt-auth.guard";
import { TeamRole } from "../../data/schemas/team.schema";
import { TeamService } from "../team/team.service";
import { UserRole } from "../../data/schemas/user.schema";

@Controller('company')
export class CompanyController {

  constructor(private readonly service:CompanyService,private readonly TeamService:TeamService) {
  }
  @Get()
  @UseGuards(JwtAuthGuard)
 async fetchAll(@Req() req){
    const teamManager = await this.TeamService.findByUserId(req.user._id).exec();
    if (teamManager.role===TeamRole.Manager||req.user.role===UserRole.Admin){
      return this.service.fetch();

    }
  }
  @Get(':id')
  fetchOne(@Param('id') id:string){
    return this.service.fetch(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('logo_name'))
  async create(@Body() data : any,@Req() req,@UploadedFile() logo:Express.Multer.File){
    const teamManager = await this.TeamService.findByUserId(req.user._id).exec();
    // console.log(req);

    if (req.user.role ==1 || teamManager.role == TeamRole.Manager){
      // console.log(logo);
      if (logo){
        data.logo_name=logo.filename;
        console.log(logo.filename);
        data.logo_path= logo.path;}
      return this.service.create(data);
    }
    throw new UnauthorizedException();

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
