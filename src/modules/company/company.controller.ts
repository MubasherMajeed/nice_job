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
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CompanyService } from './company.service';
import { TeamService } from '../team/team.service';
import { TeamRole } from '../../data/schemas/team.schema';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserRole } from '../../data/schemas/person.schema';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CreateCompanyRequest, UpdateCompanyRequest } from '../../data/dtos/company.dto';
import { UpdatePeopleRequest } from '../../data/dtos/person.dto';


@ApiTags('Company')
@Controller('company')
export class CompanyController {
  constructor(private readonly service: CompanyService) {
  }

  @Get()
  // @UseGuards(AuthGuard("jwt"))
  async fetchAll(@Req() req) {
    return this.service.fetch();

  }

  @Get(':id')
  fetchOne(@Param('id') id: string) {
    return this.service.fetch(id);
  }

  @Post()
  // @UseGuards(AuthGuard("jwt"))
  @UseInterceptors(FileInterceptor('logo'))
  @ApiBody({
    type: CreateCompanyRequest,
  })
  @ApiConsumes('multipart/form-data')
  async create(@Body() data: any, @Req() req, @UploadedFile() logo) {
    if (logo) {
      data.logo_name = logo.filename;
      data.logo_path = logo.path;
    }
    return this.service.create(data);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('logo'))
  @ApiBody({
    type: UpdateCompanyRequest,
  })
  @ApiConsumes('multipart/form-data')
  async update(@Param('id') id: string, @Body() data: any, @UploadedFile() logo) {
    if (logo) {
      data.logo_name = logo.filename;
      data.logo_path = logo.path;
    }
    return this.service.update(id, data);

  }

  @Delete(':id')
  // @UseGuards(AuthGuard("jwt"))
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
