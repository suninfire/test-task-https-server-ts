import { Module } from '@nestjs/common';
import { ApplicantService } from './applicant.service';
import { ApplicantController } from './applicant.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Applicant } from './applicant.model';

@Module({
  imports: [SequelizeModule.forFeature([Applicant])],
  controllers: [ApplicantController],
  providers: [ApplicantService],
  exports: [ApplicantService, SequelizeModule],
})
export class ApplicantModule {}
