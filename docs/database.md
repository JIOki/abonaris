#Integracion con TYPEORM
    Intalamos TypyORM
    - npm install --save @nestjs/typeorm typeorm mysql2 para mysql o
    - npm install --save @nestjs/typeorm typeorm pg para prostgres

     ## ejemplo de integracion de mysql con nestjs
       '''
        import { Module } from '@nestjs/common';
        import { TypeOrmModule } from '@nestjs/typeorm';

        @Module({
        imports: [
            TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'test',
            entities: [],
            synchronize: true,
            }),
        ],
        })
        export class AppModule {}     
    ##
'''

se procede a configurar 
