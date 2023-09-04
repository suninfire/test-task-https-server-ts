import { IsBoolean, IsIn, IsOptional, IsString } from 'class-validator';

import { categoriesEnum } from '../../../enums/categories.enum';
import { levelEnum } from '../../../enums/level.enum';

export class CreatePositionDto {
  @IsString()
  @IsOptional()
  company: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsIn(Object.values(categoriesEnum))
  categories: [];

  @IsOptional()
  @IsBoolean()
  japaneseKnowledge: boolean;

  @IsString()
  @IsOptional()
  @IsIn(Object.values(levelEnum))
  level: string;
}
