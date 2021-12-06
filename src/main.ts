import { join } from "path";
import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

///TODO: Implement Swagger for all the schemas and routes

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useStaticAssets(join(__dirname, "..", "upload"), { prefix: "/uploads/" });

  await app.listen(3000);
}

bootstrap();
