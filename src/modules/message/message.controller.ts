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
  UseInterceptors
} from "@nestjs/common";
import { MessageService } from "./message.service";
import { JwtAuthGuard } from "../../data/utilities/auth/jwt-auth.guard";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('message')
export class MessageController {
  constructor(private readonly service:MessageService) {
  }
  @Get()
  @UseGuards(JwtAuthGuard)
  async fetchAll(){
    return this.service.fetch();
  }

  @Get(':id')
  fetchOne(@Param('id') id:string){
    return this.service.fetch(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() data : any){

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
