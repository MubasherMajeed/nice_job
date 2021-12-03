import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Contacts, ContactsSchema } from "../../data/schemas/contacts.schema";

@Module({
  imports:[MongooseModule.forFeature([{name:Contacts.name,schema:ContactsSchema}])],
  providers: [ContactsService],
  controllers: [ContactsController]
})
export class ContactsModule {}
