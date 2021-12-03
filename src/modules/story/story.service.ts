import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Story, StoryDocument } from "../../data/schemas/story.schema";
import { Model } from "mongoose";

@Injectable()
export class StoryService {
  constructor(@InjectModel(Story.name) private readonly model:Model<StoryDocument>) {
  }

  fetch(id?:string){
    if (id){
      return this.model.findById(id).exec();
    }

    return this.model.find().exec();
  }

  create(data:any){
    return this.model.create(data);
  }

  update(id:string,data:any)
  {
    return this.model.findByIdAndUpdate(id,data).exec();
  }

  delete(id:string){
    return this.model.findByIdAndDelete(id).exec();
  }

}
