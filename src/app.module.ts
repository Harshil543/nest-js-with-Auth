// src/app.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { db } from './db/config';
import { JwtModule } from '@nestjs/jwt';
import { config } from './config/config';

@Module({
  imports: [
    SequelizeModule.forRoot(db),
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    JwtModule.register({
      secret: config, // replace with your secret key
      signOptions: { expiresIn: '1h' }, // adjust token expiration as needed
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
