import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { TeamService } from "./team.service";

@Controller('team')
export class TeamController {

  constructor(private readonly service:TeamService) {
  }
  @Get()
  fetchAll(){
    return this.service.fetch();
  }

  @Get('company/:id')
  getByCompanyId(@Param('id') id:string){
    return this.service.getByCompanyId(id);
  }

  @Get('getone/:id')
  fetchOne(@Param('id') id:string){
    return this.service.fetch(id);
  }
  @Get('accounts_team')
  getAccountsTeam(){
    return this.service.getAccountTeam();
  }

  @Post()
  create(@Body() data : any){
    return this.service.create(data);
  }

  @Patch(':id')
  update(@Param('id') id:string,@Body() data:any){
    return this.service.update(id,data);
  }

  @Delete(':id')
  delete(@Param('id') id:string)
  {
    return this.service.delete(id);
  }


}
