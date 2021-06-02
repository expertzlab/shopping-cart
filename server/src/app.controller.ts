import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('api/users')
  products(@Body() user: User){
    console.log('Received:' + JSON.stringify(user) ) 
  }
}
