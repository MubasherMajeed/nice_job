import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum CampaignStatus {
  Resumed,
  Paused
}

export type CampaignDocument = Campaign & Document;

@Schema({ timestamps: true })
export class Campaign {
  @Prop()
  name: string;
  @Prop()
  status: number;
  @Prop()
  status_change_time: string;
  @Prop()
  new_review: number;
  @Prop()
  entered: number;
  @Prop()
  people_enrolled: number;
  @Prop()
  people_exited: number;

}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
