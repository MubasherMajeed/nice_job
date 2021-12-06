import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MessageService } from "./message.service";
import { MessageController } from "./message.controller";
import { Message, MessageSchema } from "../../data/schemas/message.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }])],
  providers: [MessageService],
  controllers: [MessageController]
})
export class MessageModule {
}
