import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

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
  await app.listen(3000);
}
bootstrap();
