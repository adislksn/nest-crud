import { Module } from '@nestjs/common';
import { BooksController } from './books/books.controller';
import { BooksModule } from './books/books.module';

@Module({
  imports: [BooksModule],
  controllers: [BooksController],
})
export class AppModule {}
