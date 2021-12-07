import {
  Body,
  Controller, Delete,
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
import { ContactsService } from './contacts.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CreateContactRequest, UpdateContactRequest } from '../../data/dtos/contacts.dto';


@ApiTags('Contacts')
@Controller('contacts')
export class ContactsController {

  constructor(private readonly service: ContactsService) {
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
  @ApiBody({
    type: CreateContactRequest,
  })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  async create(@Body() data: any, @UploadedFile() image) {
    if (image) {
      data.image_name = image.filename;
      data.image_path = image.path;
    }
    return this.service.create(data);
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateContactRequest,
  })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image_name'))
  async update(@Param('id') id: string, @Body() data: any, @UploadedFile() image: Express.Multer.File) {
    if (image) {
      data.image_name = image.filename;
      data.image_path = image.path;
    }
    return this.service.update(id, data);
  }

  @Delete(':id')
  // @UseGuards(AuthGuard("jwt"))
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }


}
