import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Company } from "./company.schema";

export enum ContactsType {
  Customers,
  Leads,

}

export enum ContactsReviewStatus {
  Invite,
  Invited,
  Done,
}
export enum ContactAccountStatus {
  Blocked,
  UnBlocked,
}

export type ContactsDocument = Contacts & Document;

@Schema({timestamps:true})
export class Contacts {
  @Prop()
  name:string;
  @Prop()
  image_name:string;
  @Prop()
  image_path:string;
  @Prop()
  email:string;
  @Prop()
  position:string;
  @Prop()
  type:number;
  @Prop()
  status:number;
  @Prop()
  phone:number;
  @Prop()
  address:string;
  @Prop()
  unit:string;
  @Prop()
  city:string;
  @Prop()
  state:string;
  @Prop()
  zip_code:number;
  @Prop()
  account_status:number;
  @Prop({type:mongoose.Schema.Types.ObjectId,ref:Company.name})
  company_id:string;


}

export const ContactsSchema = SchemaFactory.createForClass(Contacts)
