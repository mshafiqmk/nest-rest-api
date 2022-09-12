import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item';
import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {
  @Get()
  get(@Req() req: Request, @Res() res: Response) {
    console.log(req.url);
    console.log(res.status);
    return res.send({ message: 'hi' });
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    console.log('requestbody ', createItemDto);
    return createItemDto;
  }
}
