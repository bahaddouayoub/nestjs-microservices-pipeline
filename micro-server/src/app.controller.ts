import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   // @MessagePattern('user-topic') // topic name here
//   // getHello(@Payload() message) {
//   //   let id = message.userid;
//   //   // Plus operator here does string to number conversion on the fly
//   //   return this.appService.findUserByUserId(+id);
//   // }
// }
@Controller('houses')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get(':id')
  // getHello(@Param('id') id) {
  //   return this.appService.getUserById(id);
  // }
  @Get(':myhouse')
  getuser() {
    return "ayoub house";
  }
}