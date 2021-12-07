import { Module } from "@nestjs/common";
import { PersonService } from "./person.service";
import { MongooseModule } from "@nestjs/mongoose";
import { PersonController } from "./person.controller";
import { MulterModule } from "@nestjs/platform-express";
import { Person, PersonSchema } from "../../data/schemas/person.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]),
    ///TODO: MulterModule Path should be declared once and used everywhere instead of this.
    MulterModule.register(
      { dest: "../upload" }
    )
  ],
  providers: [PersonService],
  controllers: [PersonController],
  exports: [PersonService]
})
export class PersonModule {
}
