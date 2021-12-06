import { Module } from "@nestjs/common";
import { DbModule } from "./common/db/db.module";
import { AppController } from "./app.controller";
import { AuthModule } from "./common/auth/auth.module";
import { TeamModule } from "./modules/team/team.module";
import { AppsModule } from "./modules/apps/apps.module";
import { StoryModule } from "./modules/story/story.module";
import { CompanyModule } from "./modules/company/company.module";
import { MessageModule } from "./modules/message/message.module";
import { CampaignModule } from "./modules/campaign/campaign.module";
import { SettingsModule } from "./modules/settings/settings.module";
import { ContactsModule } from "./modules/contacts/contacts.module";

///TODO: Files are uploading in the project directory, upload directory should be out of the project directory
///TODO: Code Formatting must be good
///TODO: Done: Auth changed, try to understand all the changes

@Module({
  imports: [
    DbModule,
    CompanyModule,
    StoryModule,
    AuthModule,
    TeamModule,
    AppsModule,
    CampaignModule,
    SettingsModule,
    MessageModule,
    ContactsModule
  ],
  controllers: [AppController]
})
export class AppModule {
}
