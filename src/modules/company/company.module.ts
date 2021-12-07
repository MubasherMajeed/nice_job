import { Module } from "@nestjs/common";
import { TeamModule } from "../team/team.module";
import { MongooseModule } from "@nestjs/mongoose";
import { CompanyService } from "./company.service";
import { MulterModule } from "@nestjs/platform-express";
import { CompanyController } from "./company.controller";
import { Company, CompanySchema } from "../../data/schemas/company.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }]),
    MulterModule.register(
      {
        dest: "../upload"
      }
    ), TeamModule
  ],
  providers: [CompanyService
  ],
  controllers: [CompanyController]
})
export class CompanyModule {
}


