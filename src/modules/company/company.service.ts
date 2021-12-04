import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Company, CompanyDocument } from "../../data/schemas/company.schema";
import { Model } from "mongoose";

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company.name) private readonly model:Model<CompanyDocument>) {
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
