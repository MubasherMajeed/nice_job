import * as mongoose from "mongoose";
import { Person } from "./person.schema";
import { Company } from "./company.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum TeamRole {
  Manager,
  TeamMember
}

export type TeamDocument = Team & Document;

@Schema({ timestamps: true })
export class Team {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Person.name })
  user_id: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Company.name })
  company_id: string;

  @Prop()
  role: number;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
