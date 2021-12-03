import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
  UnauthorizedException,
  UseGuards
} from "@nestjs/common";
import { TeamService } from "./team.service";
import { JwtAuthGuard } from "../../data/utilities/auth/jwt-auth.guard";
import { UserRole } from "../../data/schemas/user.schema";
import { createPrivateKey } from "crypto";
import { TeamRole } from "../../data/schemas/team.schema";

@Controller('team')
export class TeamController {

  constructor(private readonly service:TeamService) {
  }
  @Get()
  @UseGuards(JwtAuthGuard)
  fetchAll(){
    return this.service.fetch();
  }

  @Get('company/:id')
  @UseGuards(JwtAuthGuard)
  getCompanyTeamByCompanyId(@Param('id') id:string){
    return this.service.getCompanyTeam(id);
  }

  @Get('getone/:id')
  @UseGuards(JwtAuthGuard)
  fetchOne(@Param('id') id:string){
    return this.service.fetch(id);
  }

  @Get('accounts_team')
  @UseGuards(JwtAuthGuard)
  getAccountsTeam(){
    return this.service.getAccountTeam();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() data : any,@Req() req){
    const checkManager = await this.service.findByUserId(req.user._id).exec();

    if (req.user.role===UserRole.Admin||checkManager.role=== TeamRole.Manager){
      return this.service.create(data);
    }
    throw new UnauthorizedException();
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id:string,@Body() data:any, @Req() req){
    const checkManager = await this.service.findByUserId(req.user._id).exec();

    if (req.user.role===UserRole.Admin||checkManager.role=== TeamRole.Manager) {
      return this.service.update(id, data);
    }
    throw new UnauthorizedException();
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id:string)
  {
    return this.service.delete(id);
  }


}
