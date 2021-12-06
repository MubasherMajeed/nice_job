import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ContactsService } from "./contacts.service";
import { ContactsController } from "./contacts.controller";
import { Contacts, ContactsSchema } from "../../data/schemas/contacts.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Contacts.name, schema: ContactsSchema }])],
  providers: [ContactsService],
  controllers: [ContactsController]
})
export class ContactsModule {
}
