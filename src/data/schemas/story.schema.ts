import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { User } from "./user.schema";
import { Company } from "./company.schema";

export enum StoryStatus {
  Published,
  UnPublished,
  Shared,
  UnMatched
}


export type StoryDocument = Story & Document;

@Schema({timestamps:true})
export class Story {
  @Prop()
  comment:string;
  @Prop()
  image_name:string;
  @Prop()
  image_path:string;
  @Prop({type:mongoose.Schema.Types.ObjectId,ref:User.name})
  user_id:string;
  @Prop({type:mongoose.Schema.Types.ObjectId,ref:Company.name})
  company_id:string;
  @Prop()
  status:number;
  @Prop()
  city:string;
  @Prop()
  country:string;
  @Prop()
  tags:string;


}


export const StorySchema= SchemaFactory.createForClass(Story);
