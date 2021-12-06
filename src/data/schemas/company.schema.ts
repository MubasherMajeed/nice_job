import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum CompanyRole {
  Team,
  AccountsTeam
}


export type CompanyDocument = Company & Document;

@Schema({ timestamps: true })
export class Company {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  address: string;

  @Prop()
  unit: string;

  @Prop()
  country: string;

  @Prop()
  state: string;

  @Prop()
  city: string;

  @Prop()
  postal_code: number;

  @Prop()
  website: string;

  @Prop()
  logo_name: string;

  @Prop()
  logo_path: string;

  @Prop()
  sdk_public_key: string;

  @Prop()
  role: number;
}


export const CompanySchema = SchemaFactory.createForClass(Company);
