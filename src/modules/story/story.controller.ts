import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req, UploadedFile,
  UseGuards, UseInterceptors
} from "@nestjs/common";
import { JwtAuthGuard } from "../../data/utilities/auth/jwt-auth.guard";
import { StoryService } from "./story.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('story')
export class StoryController {
  constructor(private readonly service:StoryService) {
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async fetchAll(@Req() req){
      return this.service.fetch();
  }

  @Get(':id')
  fetchOne(@Param('id') id:string){
    return this.service.fetch(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image_name'))
  async create(@Body() data : any,@UploadedFile() image:Express.Multer.File){
    if (image){
      data.image_name=image.filename;
      data.image_path=image.path;
    }
    return this.service.create(data);
  }

  @Patch(':id')
  async update(@Param('id') id:string,@Body() data:any){
    return this.service.update(id,data);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id:string,@Req() req)
  {
      return this.service.delete(id);
  }

}
