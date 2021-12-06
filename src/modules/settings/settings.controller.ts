import { AuthGuard } from "@nestjs/passport";
import { SettingsService } from "./settings.service";
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";

@Controller("settings")
export class SettingsController {
  constructor(private readonly service: SettingsService) {
  }

  @Get()
  @UseGuards(AuthGuard("jwt"))
  async fetchAll() {
    return this.service.fetch();
  }

  @Get(":id")
  fetchOne(@Param("id") id: string) {
    return this.service.fetch(id);
  }

  @Post()
  @UseGuards(AuthGuard("jwt"))
  async create(@Body() data: any) {

    return this.service.create(data);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() data: any) {
    return this.service.update(id, data);
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  delete(@Param("id") id: string) {
    return this.service.delete(id);
  }

}
