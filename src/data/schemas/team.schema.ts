import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { User } from "./user.schema";
import { Company } from "./company.schema";


export enum TeamRole {
  Manager,
  TeamMember
}

export type TeamDocument =Team & Document;

@Schema({timestamps:true})
export class Team {
  @Prop({type:mongoose.Schema.Types.ObjectId,ref:User.name})
  user_id:string;
  @Prop({type:mongoose.Schema.Types.ObjectId,ref:Company.name})
  company_id:string;
  @Prop()
  role:number;

}

export const TeamSchema = SchemaFactory.createForClass(Team);
