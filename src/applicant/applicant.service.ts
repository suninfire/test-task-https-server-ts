import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Applicant } from './applicant.model';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';

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
    return await this.applicantRepository.findAll();
  }

  async findOneById(id: number) {
    const applicant = await this.applicantRepository.findOne({
      where: { id: id },
    });
    return applicant;
  }

  async updateApplicant(id: number, applicant: UpdateApplicantDto) {
    const { email, categories, level, japaneseKnowledge } = applicant;
    const updatedApplicant = await this.applicantRepository.update(
      {
        email,
        categories,
        level,
        japaneseKnowledge,
      },
      {
        where: { id: id },
      },
    );
    return updatedApplicant;
  }

  async deleteApplicant(id: number) {
    const applicant = await this.applicantRepository.findOne({
      where: { id: id },
    });
    if (!applicant) {
      throw new BadRequestException({
        message: `Applicant with id ${id} not found`,
      });
    }
    const deletedApplicant = await this.applicantRepository.destroy({
      where: { id: id },
    });
    return deletedApplicant;
  }
}
