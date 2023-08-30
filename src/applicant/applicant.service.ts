import { Injectable } from '@nestjs/common';
import { CreateApplicantDto } from './dto/create-applicant.dto';
// import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Applicant } from './applicant.model';

@Injectable()
export class ApplicantService {
  constructor(
    @InjectModel(Applicant) private applicantRepository: typeof Applicant,
  ) {}
  async createApplicant(applicant: CreateApplicantDto) {
    const newApplicant = await this.applicantRepository.create(applicant);
    return newApplicant;
  }

  async findAllApplicants() {
    const users = await this.applicantRepository.findAll();
    return users;
  }
}
