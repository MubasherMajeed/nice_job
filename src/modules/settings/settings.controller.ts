import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { SettingsService } from "./settings.service";
import { JwtAuthGuard } from "../../data/utilities/auth/jwt-auth.guard";

@Controller('settings')
export class SettingsController {
  constructor(private readonly service:SettingsService) {
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
  delete(@Param('id') id:string)
  {
    return this.service.delete(id);
  }

}
