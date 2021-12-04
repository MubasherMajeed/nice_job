import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum UserRole {
  User,
  Admin
}

export type UserDocument = User & Document;

@Schema({timestamps:true})
export class User {
  @Prop()
  first_name:string;
  @Prop()
  last_name:string;
  @Prop()
  email:string;
  @Prop()
  phone:string;
  @Prop()
  image_name:string;
  @Prop()
  image_path:string;
  @Prop()
  password:string;
  @Prop()
  role:number;

}


export const UserSchema = SchemaFactory.createForClass(User);
