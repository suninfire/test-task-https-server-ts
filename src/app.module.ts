import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ApplicantModule } from './applicant/applicant.module';
import { Applicant } from './applicant/applicant.model';

import { PositionModule } from './position/position.module';
import { Position } from './position/position.model';

@Module({
  imports: [
    PositionModule,
    ApplicantModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_NAME,
      models: [Applicant, Position],
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
