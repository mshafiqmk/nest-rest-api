import { Controller, Get } from '@nestjs/common';
import Messge, { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hi')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getHi(input: string): Messge {
    return this.appService.getHi();
  }
}
