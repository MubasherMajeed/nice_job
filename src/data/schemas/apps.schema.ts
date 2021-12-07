import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum MediaTypes {
  Apps,
  SocialMedia,
  ReviewSites
}

export type AppsDocument = Apps & Document;

@Schema({ timestamps: true })
export class Apps {
  @Prop()
  name: string;
  @Prop()
  data: string;
  @Prop()
  connected: boolean;
  @Prop()
  media_type: number;
}

export const AppsSchema = SchemaFactory.createForClass(Apps);
