import { Controller, Get, Req } from '@nestjs/common';
// import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {

  @Get()
  getHello(
    @Req() req: Request,
  ): any {
    return req.headers;
    // return this.appService.getHello();
  }
}
