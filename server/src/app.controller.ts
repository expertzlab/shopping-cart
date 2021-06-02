import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './product';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('products')
  products(@Body() product: Product){
    console.log('Received:' + JSON.stringify(product) ) 
  }
}
