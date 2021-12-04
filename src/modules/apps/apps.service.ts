import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Apps, AppsDocument } from "../../data/schemas/apps.schema";
import { Model } from "mongoose";

@Injectable()
export class AppsService {

  constructor(@InjectModel(Apps.name) private readonly model:Model<AppsDocument>) {
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
