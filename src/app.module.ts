import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { env } from 'process';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.development.env', 
    // Specify the path to your .env file
  }),
  // Other modules if needed
  TypeOrmModule.forRoot({ 
    /*type: 'postgres',
    host: 'localhost',
    port: 5435,
    username: 'postgres',
    password: 'sa',
    database: 'abonaris',
    entities: [], // Adjust the path to your entities
    //autoLoadEntities: true,
    synchronize: false, // Set to false in production*/
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'data_test',
    entities: [],
    synchronize: true,

  })
],
  

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
