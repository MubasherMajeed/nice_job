import { Module } from "@nestjs/common";
import { CampaignService } from "./campaign.service";
import { CampaignController } from "./campaign.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Campaign, CampaignSchema } from "../../data/schemas/campaign.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Campaign.name, schema: CampaignSchema }])],
  providers: [CampaignService],
  controllers: [CampaignController]
})
export class CampaignModule {
}
