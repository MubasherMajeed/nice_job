import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Team, TeamDocument } from "../../data/schemas/team.schema";

@Injectable()
export class TeamService {
  constructor(@InjectModel(Team.name) private readonly model: Model<TeamDocument>) {
  }

  findByUserId(id: string) {
    return this.model.findOne({ user_id: id }).exec();
  }

  async fetch(id?: string) {
    if (id) {
      return this.model.findById(id).exec();
    }
    return await this.model.find().populate("user_id").exec();
  }

  getAccountTeam() {
    return this.model.find({ company_id: null }).populate("user_id").exec();
  }

  getCompanyTeam(id: string) {
    //companyTeam (with company id)
    return this.model.find({ company_id: id }).populate("user_id").populate("company_id").exec();
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
