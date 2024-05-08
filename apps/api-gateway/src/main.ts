/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = "api";
  app.setGlobalPrefix(globalPrefix);

  const port = process.env.PORT || 3000;

  const config = new DocumentBuilder()
    .setTitle('Turismo v2.0')
    .setDescription('Documentación del sistema de turismo de Guajiritos S.R.L.')
    .setVersion('0.1.8')
    .addServer(`http://localhost:${port}`, 'local server')
    // .addBearerAuth()
    // .addBasicAuth()
    .build()


  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup(globalPrefix, app, document)

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
