import { User } from "../../common/auth/users/user.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum UserRole {
  User,
  Admin
}

export type PersonDocument = Person & Document;

@Schema({ timestamps: true })
export class Person extends User {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  phone: string;

  @Prop()
  image_name: string;

  @Prop()
  image_path: string;
  
  @Prop()
  role: number;

}


export const PersonSchema = SchemaFactory.createForClass(Person);
