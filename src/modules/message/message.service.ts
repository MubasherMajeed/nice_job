import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Message, MessageDocument } from "../../data/schemas/message.schema";

@Injectable()
export class MessageService {
  constructor(@InjectModel(Message.name) private readonly model: Model<MessageDocument>) {
  }

  fetch(id?: string) {
    if (id) {
      return this.model.findById(id).exec();
    }

    return this.model.find().populate("company_id").exec();
  }

  create(data: any) {
    return this.model.create(data);
  }

  update(id: string, data: any) {
    return this.model.findByIdAndUpdate(id, data).exec();
  }

  delete(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
