import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Company, CompanySchema } from "../../data/schemas/company.schema";
import { MulterModule } from "@nestjs/platform-express";
import { TeamModule } from "../team/team.module";

@Module({
  imports:[MongooseModule.forFeature([{name:Company.name,schema:CompanySchema}]),MulterModule.register(
    {
      dest:"./upload"
    }
  ),TeamModule],
  providers: [CompanyService
  ],
  controllers: [CompanyController]
})
export class CompanyModule {}


