import { join } from 'path';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

///TODO: Implement Swagger for all the schemas and routes

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  console.log(join(__dirname, '..', 'upload'));
  app.useStaticAssets(join(process.cwd(), '..', 'upload'), { prefix: '/uploads/' });

  const config = new DocumentBuilder()
    .setTitle('Nice Job').addTag('All Woody Api`s').addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'jwt',
      }, 'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('nicejob', app, document);

  await app.listen(3000);
}

bootstrap();
