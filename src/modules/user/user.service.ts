import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../../data/schemas/user.schema";
import { Model } from "mongoose";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly model:Model<UserDocument>) {
  }

  findByEmail(email:string){
    return this.model.findOne({email:email}).exec();
  }

  fetch(id?:string){
  if (id){
    return this.model.findById(id).exec();
  }
  return this.model.find().exec();
  }

  async create(data:any){
    const emailCheck= await this.model.findOne({
      email:data.email
    });
    if (emailCheck){
      throw new HttpException(
        "User with this email already exist",
        HttpStatus.NOT_ACCEPTABLE
      )
    }
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
