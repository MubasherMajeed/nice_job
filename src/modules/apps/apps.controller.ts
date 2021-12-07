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
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateAppRequest, UpdateAppRequest } from '../../data/dtos/apps.dto';

@ApiTags('Apps')
@Controller("apps")
export class AppsController {
  ///TODO: Remove extra services which is not used
  constructor(private readonly service: AppsService) {
  }

  @Get()
  // @UseGuards(AuthGuard("jwt"))
  async fetchAll(@Req() req) {
      return this.service.fetch();
  }

  @Get(":id")
  fetchOne(@Param("id") id: string) {
    return this.service.fetch(id);
  }

  @Post()
  @ApiBody({
    type:CreateAppRequest
  })
  // @UseGuards(AuthGuard("jwt"))
  async create(@Body() data: any) {
    return this.service.create(data);
  }

  @Patch(":id")
  @ApiBody({
    type:UpdateAppRequest
  })
  async update(@Param("id") id: string, @Body() data: any) {
    return this.service.update(id, data);
  }

  @Delete(":id")
  // @UseGuards(AuthGuard("jwt"))
  delete(@Param("id") id: string) {
      return this.service.delete(id);
  }
}
