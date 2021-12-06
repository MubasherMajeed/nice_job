import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum MessageType {
  SMS,
  Email

}

export enum MessageStatus {
  Paused,
  Resumed
}

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop()
  html: string;

  @Prop()
  type: number;

  @Prop()
  sent: number;

  @Prop()
  opened: number;

  @Prop()
  clicked: number;

  @Prop()
  goal: number;

  @Prop()
  status: number;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
