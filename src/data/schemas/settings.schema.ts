import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type SettingsDocument = Settings & Document;

@Schema({ timestamps: true })
export class Settings {
  @Prop()
  micro_site_address: string;

  @Prop()
  collect_leads: boolean;

  @Prop()
  lead_button_text: string;

  @Prop()
  lead_form_title: string;

  @Prop()
  lead_form_subtitle: string;

  @Prop()
  review_checkin_invite: boolean;

  @Prop()
  delay_before_sending_mail: number;

  @Prop()
  checkin_link: string;
}


export const SettingsSchema = SchemaFactory.createForClass(Settings);

