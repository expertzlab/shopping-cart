import { Controller, Get, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { User } from './user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('api/users')
  products(@Body() user: User){
    console.log('Received:' + JSON.stringify(user) ) 
  }

  @Post('api/fileupload')
  @UseInterceptors(
    FileInterceptor('file')
  )
  fileUplod(@UploadedFile() file){

    const response = {
      'filename': file.filename, 'originalName': file.originalName
    }
    console.log('file received', response)
    return response;

  }
}
