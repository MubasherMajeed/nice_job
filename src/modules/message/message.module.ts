import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Message, MessageSchema } from "../../data/schemas/message.schema";

@Module({
  imports:[MongooseModule.forFeature([{name:Message.name,schema:MessageSchema}])],
  providers: [MessageService],
  controllers: [MessageController]
})
export class MessageModule {}
