import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PersonService } from './person.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CreatePersonRequest, UpdatePeopleRequest } from '../../data/dtos/person.dto';

@ApiTags('Persons')
@Controller('persons')
export class PersonController {
  constructor(private readonly service: PersonService) {
  }

  ///TODO: Comment JWT from all the routes in every module while api is in development
  @Get()
  // @UseGuards(AuthGuard("jwt"))
  @ApiBearerAuth('access-token')
  fetchAll() {
    return this.service.fetch();
  }

  @Get(':id')
  // @UseGuards(AuthGuard("jwt"))
  fetchOne(@Param('id') id: string) {
    return this.service.fetch(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
      type: CreatePersonRequest,
    },
  )
  create(@Body() data: any, @UploadedFile() image) {
    console.log(image);
    if (image) {
      data.image_name = image.filename;
      data.image_path = image.path;
    }
    return this.service.create(data);
  }

  @Patch(':id')
  // @UseGuards(AuthGuard("jwt"))
  @ApiBody({
    type: UpdatePeopleRequest,
  })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  update(@Param('id') id: string, @Body() data: any, @UploadedFile() image) {
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
