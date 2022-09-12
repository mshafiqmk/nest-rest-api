import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHi(): Messge {
    return {
      message: 'hi adnan',
    };
  }
}

export default interface Messge {
  message: string;
}
