import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  start() {
    return 'Start Books';
  }
  @Get('/hello')
  hello() {
    return 'Hello Books';
  }
  @Get('/:name')
  helloName(@Param('name') name: string) {
    return `Hello ${name}`;
  }
  @Post()
  create(@Body() body: any) {
    return body;
  }
  @Post('/params')
  createParams(@Body('name') name: string, @Body('age') age: number) {
    return { name, age };
  }
}
