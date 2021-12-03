import { Module } from '@nestjs/common';
import { AppsService } from './apps.service';
import { AppsController } from './apps.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Apps, AppsSchema } from "../../data/schemas/apps.schema";
import { TeamModule } from "../team/team.module";

@Module({
  imports:[MongooseModule.forFeature([{name:Apps.name,schema:AppsSchema}]),TeamModule],
  providers: [AppsService],
  controllers: [AppsController]
})
export class AppsModule {}
