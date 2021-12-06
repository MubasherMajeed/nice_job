import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SettingsService } from "./settings.service";
import { SettingsController } from "./settings.controller";
import { Settings, SettingsSchema } from "../../data/schemas/settings.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Settings.name, schema: SettingsSchema }])],
  providers: [SettingsService],
  controllers: [SettingsController]
})
export class SettingsModule {
}
