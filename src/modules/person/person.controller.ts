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
  UseInterceptors
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { PersonService } from "./person.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("persons")
export class PersonController {
  constructor(private readonly service: PersonService) {
  }

  ///TODO: Comment JWT from all the routes in every module while api is in development
  @Get()
  @UseGuards(AuthGuard("jwt"))
  fetchAll() {
    return this.service.fetch();
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  fetchOne(@Param("id") id: string) {
    return this.service.fetch(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor("image_name"))
  create(@Body() data: any, @UploadedFile() image: Express.Multer.File) {
    console.log(image);
    if (image) {
      data.image_name = image.filename;
      data.image_path = image.path;
    }
    return this.service.create(data);
  }

  @Patch(":id")
  @UseGuards(AuthGuard("jwt"))
  update(@Param("id") id: string, @Body() data: any) {
    return this.service.update(id, data);
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  delete(@Param("id") id: string) {
    return this.service.delete(id);
  }


}
