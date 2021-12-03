import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { UserService } from "./user.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('user')
export class UserController {
  constructor(private readonly service:UserService) {
  }

  @Get()
  fetchAll(){
    return this.service.fetch();
  }
  @Get(':id')
  fetchOne(@Param('id') id:string){
    return this.service.fetch(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image_name'))
  create(@Body() data : any,@UploadedFile() image:Express.Multer.File){
    console.log(image);
    if (image){
      data.image_name=image.filename;
      console.log(image.filename);
      data.image_path= image.path;}
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
