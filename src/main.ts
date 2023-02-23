import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //Evita que se envíen parámetros que no están especificados en el dto omitiéndolos.
      whitelist: true,
      //Genera un error cuando pasa esto mismo.
      forbidNonWhitelisted: true,
    }),
  );
  // Configuración Swagger en NestJS
  const config = new DocumentBuilder()
    .setTitle('Ssj400-store')
    .setDescription('Documentación ssj400-store')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // URL API
  SwaggerModule.setup('docs', app, document);

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
