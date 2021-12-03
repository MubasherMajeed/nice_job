import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Settings, SettingsDocument } from "../../data/schemas/settings.schema";
import { Model } from "mongoose";

@Injectable()
export class SettingsService {
  constructor(@InjectModel(Settings.name) private readonly model:Model<SettingsDocument>) {
  }
  fetch(id?:string){
    if (id){
      return this.model.findById(id).exec();
    }

    return this.model.find().populate('company_id').exec();
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
