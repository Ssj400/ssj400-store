import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as Joi from 'joi';

import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { environments } from './environments';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      //Que archivo lee
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      //La vuelve global para todo el programa
      isGlobal: true,
      //Validar las variables de entorno
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
    UsersModule,
    ProductsModule,
    HttpModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      //Usefactory nos permite fabricar un provider de manera asincrona, no es recomendable hacerlo hacia una api porque dependemos de ella para arrancar el programa
      //Lo más recomendable es hacerlo a una db o llamar a la api dentro de un método
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const tasks = await http.get(
          'https://jsonplaceholder.typicode.com/todos',
          {
            headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
          },
        );
        return (await firstValueFrom(tasks)).data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
