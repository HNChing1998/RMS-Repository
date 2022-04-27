import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function request() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Requesting Management System')
    .setDescription('RMS - Requesting Management System (Task - OJT, April 2022)')
    .setVersion('1.0')
    .addTag('Requesting Management System - DNSC')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(3309);
}
request();
