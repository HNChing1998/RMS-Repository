import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user-entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule,AuthModule,TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'rms-repository',
        entities: [User],
        synchronize: true,
      }),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
