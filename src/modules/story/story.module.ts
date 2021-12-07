import { Module } from "@nestjs/common";
import { StoryService } from "./story.service";
import { MongooseModule } from "@nestjs/mongoose";
import { StoryController } from "./story.controller";
import { MulterModule } from "@nestjs/platform-express";
import { Story, StorySchema } from "../../data/schemas/story.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Story.name, schema: StorySchema }]),
    MulterModule.register(
      {
        dest: "../upload"
      }
    )
  ],
  providers: [StoryService],
  controllers: [StoryController]
})
export class StoryModule {
}
