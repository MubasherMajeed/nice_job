import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Contacts, ContactsDocument } from "../../data/schemas/contacts.schema";
import { Model } from "mongoose";

@Injectable()
export class ContactsService {
  constructor(@InjectModel(Contacts.name) private readonly model:Model<ContactsDocument>) {
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
