import { Module } from '@nestjs/common';
import { AppController, BookController } from './controller';
import { AppService } from './service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookStoreEntity } from './entity'

@Module({
  imports: [TypeOrmModule.forFeature([BookStoreEntity])],
  controllers: [AppController, BookController],
  providers: [AppService],
})
export class AppModule { }
