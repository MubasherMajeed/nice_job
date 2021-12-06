import { Module } from "@nestjs/common";
import { AppsService } from "./apps.service";
import { TeamModule } from "../team/team.module";
import { MongooseModule } from "@nestjs/mongoose";
import { AppsController } from "./apps.controller";
import { Apps, AppsSchema } from "../../data/schemas/apps.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Apps.name, schema: AppsSchema }]), TeamModule],
  providers: [AppsService],
  controllers: [AppsController]
})
export class AppsModule {
}
