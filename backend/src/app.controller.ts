import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { findWinnerDto } from './dto';

@Controller('find')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/winner')
  findWinner(@Body() dto: findWinnerDto) {
    return this.appService.findWinner(dto);
  }
}
