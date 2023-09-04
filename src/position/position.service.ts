import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { Position } from './position.model';

@Injectable()
export class PositionService {
  constructor(
    @InjectModel(Position) private positionRepository: typeof Position,
  ) {}
  async createPosition(position: CreatePositionDto) {
    const newPosition = await this.positionRepository.create(position);
    return newPosition;
  }

  async findAllPositions() {
    return await this.positionRepository.findAll();
  }

  async findOnePositionById(id: number) {
    const position = await this.positionRepository.findOne({
      where: { id: id },
    });
    return position;
  }

  async updatePosition(id: number, position: UpdatePositionDto) {
    const { company, description, categories, japaneseKnowledge, level } =
      position;
    const updatedPosition = await this.positionRepository.update(
      {
        company,
        description,
        categories,
        level,
        japaneseKnowledge,
      },
      {
        where: { id: id },
      },
    );
    return updatedPosition;
  }

  async deletePosition(id: number) {
    const position = await this.positionRepository.findOne({
      where: { id: id },
    });
    if (!position) {
      throw new BadRequestException({
        message: `Position with id ${id} not found`,
      });
    }
    const deletedPosition = await this.positionRepository.destroy({
      where: { id: id },
    });
    return deletedPosition;
  }
}
