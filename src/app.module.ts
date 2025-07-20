import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { env } from 'process';    

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.development.env', // Specify the path to your .env file
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
