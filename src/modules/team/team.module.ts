import { Module } from "@nestjs/common";
import { TeamService } from "./team.service";
import { MongooseModule } from "@nestjs/mongoose";
import { TeamController } from "./team.controller";
import { Team, TeamSchema } from "../../data/schemas/team.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }])],
  controllers: [TeamController],
  providers: [TeamService],
  exports: [TeamService]
})
export class TeamModule {
}

