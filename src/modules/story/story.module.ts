import { Module } from '@nestjs/common';
import { StoryService } from './story.service';
import { StoryController } from './story.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Story, StorySchema } from "../../data/schemas/story.schema";
import { MulterModule } from "@nestjs/platform-express";

@Module({
  imports:[MongooseModule.forFeature([{name:Story.name ,schema:StorySchema}]),MulterModule.register(
    {
      dest:"./upload"
    }
  )],
  providers: [StoryService],
  controllers: [StoryController]
})
export class StoryModule {}
