import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';


export class CreateMessageRequest {
  @ApiProperty()
  html: string;

  @ApiProperty()
  type: number;

  @ApiProperty()
  sent: number;

  @ApiProperty()
  opened: number;

  @ApiProperty()
  clicked: number;

  @ApiProperty()
  goal: number;

  @ApiProperty()
  status: number;
}


export class UpdateMessageRequest {
  @ApiProperty()
  html: string;

  @ApiProperty()
  type: number;

  @ApiProperty()
  sent: number;

  @ApiProperty()
  opened: number;

  @ApiProperty()
  clicked: number;

  @ApiProperty()
  goal: number;

  @ApiProperty()
  status: number;
}


