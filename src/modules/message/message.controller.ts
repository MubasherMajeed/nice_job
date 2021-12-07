import {
  Body,
  Controller, Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateMessageRequest, UpdateMessageRequest } from '../../data/dtos/message.dto';

@ApiTags('Messages')
@Controller('message')
export class MessageController {
  constructor(private readonly service: MessageService) {
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
    type: CreateMessageRequest,
  })
  // @UseGuards(AuthGuard("jwt"))
  async create(@Body() data: any) {

    return this.service.create(data);
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateMessageRequest,
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
