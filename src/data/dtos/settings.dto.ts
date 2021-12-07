import { Prop } from '@nestjs/mongoose';
import { ApiBody, ApiProperty } from '@nestjs/swagger';


export class CreateSettingsRequest {
  @ApiProperty()
  micro_site_address: string;

  @ApiProperty()
  collect_leads: boolean;

  @ApiProperty()
  lead_button_text: string;

  @ApiProperty()
  lead_form_title: string;

  @ApiProperty()
  lead_form_subtitle: string;

  @ApiProperty()
  review_checkin_invite: boolean;

  @ApiProperty()
  delay_before_sending_mail: number;

  @ApiProperty()
  checkin_link: string;
}


export class UpdateSettingsRequest {
  @ApiProperty()
  micro_site_address: string;

  @ApiProperty()
  collect_leads: boolean;

  @ApiProperty()
  lead_button_text: string;

  @ApiProperty()
  lead_form_title: string;

  @ApiProperty()
  lead_form_subtitle: string;

  @ApiProperty()
  review_checkin_invite: boolean;

  @ApiProperty()
  delay_before_sending_mail: number;

  @ApiProperty()
  checkin_link: string;
}

