import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Person, PersonDocument } from "../../data/schemas/person.schema";
import { Model } from "mongoose";

@Injectable()
export class PersonService {
  constructor(@InjectModel(Person.name) private readonly model:Model<PersonDocument>) {
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
      username:data.username
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

  async fetchByUsername(username: string, password: string): Promise<Person> {
    return await this.model.findOne({ username, password }).exec();
  }
}
