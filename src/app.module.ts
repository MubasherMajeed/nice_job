import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from "./modules/user/user.module";
import { MongooseModule } from "@nestjs/mongoose";
import { CompanyModule } from "./modules/company/company.module";
import { AuthModule } from "./data/utilities/auth/auth.module";
import { TeamModule } from "./modules/team/team.module";
import { AppsModule } from "./modules/apps/apps.module";
import { StoryModule } from "./modules/story/story.module";
import { CampaignModule } from "./modules/campaign/campaign.module";
import { SettingsModule } from "./modules/settings/settings.module";
import { MessageModule } from "./modules/message/message.module";
import { ContactsModule } from "./modules/contacts/contacts.module";

@Module({
  imports: [UserModule,MongooseModule.forRoot('mongodb://localhost:27017/nice_job'),
  CompanyModule,StoryModule
    ,AuthModule,TeamModule,AppsModule,
    CampaignModule,
    SettingsModule,
    MessageModule,
    ContactsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
