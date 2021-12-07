import { AuthGuard } from '@nestjs/passport';
import { CampaignService } from './campaign.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateCompanyRequest } from '../../data/dtos/company.dto';
import { CreateCampaignRequest, UpdateCampaignRequest } from '../../data/dtos/campaign.dto';

@ApiTags('Campaign')
@Controller('campaign')
export class CampaignController {

  constructor(private readonly service: CampaignService) {
  }

  @Get()
  // @UseGuards(AuthGuard("jwt"))
  async fetchAll() {
    return this.service.fetch();
  }

  @Get(':id')
  fetchOne(@Param('id') id: string) {
    return this.service.fetch(id);
  }

  @Post()
  @ApiBody({
    type: CreateCampaignRequest,
  })
  // @UseGuards(AuthGuard("jwt"))
  async create(@Body() data: any) {

    return this.service.create(data);
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateCampaignRequest,
  })
  async update(@Param('id') id: string, @Body() data: any) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  // @UseGuards(AuthGuard("jwt"))
  delete(@Param('id') id: string, @Req() req) {
    return this.service.delete(id);
  }
}
