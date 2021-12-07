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
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TeamService } from './team.service';
import { UserRole } from '../../data/schemas/person.schema';
import { TeamRole } from '../../data/schemas/team.schema';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateTeamRequest, UpdateTeamRequest } from '../../data/dtos/team.dto';


@ApiTags('Teams')
@Controller('team')
export class TeamController {

  constructor(private readonly service: TeamService) {
  }

  @Get()
  // @UseGuards(AuthGuard("jwt"))
  async fetchAll(@Req() req) {
    return this.service.fetch();
  }

  @Get('company/:id')
  // @UseGuards(AuthGuard("jwt"))
  async getCompanyTeamByCompanyId(@Param('id') id: string, @Req() req) {
    return this.service.getCompanyTeam(id);
  }

  @Get('getone/:id')
  // @UseGuards(AuthGuard("jwt"))
  async fetchOne(@Param('id') id: string, @Req() req) {
    return this.service.fetch(id);
  }

  ///TODO: There should be no underscore in all the modules routes: Follow and Read https://restfulapi.net/resource-naming/
  @Get('accounts-team')
  // @UseGuards(AuthGuard("jwt"))
  getAccountsTeam() {
    return this.service.getAccountTeam();
  }

  @Post()
  @ApiBody({ type: CreateTeamRequest })
  // @UseGuards(AuthGuard("jwt"))
  async create(@Body() data: any, @Req() req) {
    return this.service.create(data);
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateTeamRequest,
  })
  // @UseGuards(AuthGuard("jwt"))
  async update(@Param('id') id: string, @Body() data: any) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  // @UseGuards(AuthGuard("jwt"))
  async delete(@Param('id') id: string, @Req() req) {
    return this.service.delete(id);
  }


}
