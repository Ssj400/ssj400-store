import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('TASKS') private tasks: any[],
    //Aquí si se debe usar el inject
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    //Tambíen se puede tipar
    const apiKey = this.configService.apiKey;
    const name = this.configService.database.port;
    console.log(this.tasks);
    return `Hello World! ${apiKey} ${name}`;
  }
}
