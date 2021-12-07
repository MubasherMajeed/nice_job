import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { StoryService } from './story.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CreateStoryRequest } from '../../data/dtos/story.dto';


@ApiTags('Story')
@Controller('story')
export class StoryController {
  constructor(private readonly service: StoryService) {
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
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  @ApiBody({
    type: CreateStoryRequest,
  })
  async create(@Body() data: any, @UploadedFile() image: Express.Multer.File) {
    if (image) {
      data.image_name = image.filename;
      data.image_path = image.path;
    }
    return this.service.create(data);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  @ApiBody({
    type: CreateStoryRequest,
  })
  async update(@Param('id') id: string, @Body() data: any, @UploadedFile() image: Express.Multer.File) {
    if (image) {
      data.image_name = image.filename;
      data.image_path = image.path;
    }
    return this.service.update(id, data);
  }

  @Delete(':id')
  // @UseGuards(AuthGuard("jwt"))
  delete(@Param('id') id: string, @Req() req) {
    return this.service.delete(id);
  }

}
