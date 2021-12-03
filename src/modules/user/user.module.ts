import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "../../data/schemas/user.schema";
import { MulterModule } from "@nestjs/platform-express";

@Module({
  imports:[MongooseModule.forFeature([{name:User.name,schema:UserSchema}]),MulterModule.register(
    { dest: "./upload" }
  )],
  providers: [UserService],
  controllers: [UserController],
  exports:[UserService]
})
export class UserModule {}
