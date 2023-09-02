import {
  IsBoolean,
  IsEmail,
  IsIn,
  IsOptional,
  IsString,
} from 'class-validator';

import { categoriesEnum } from '../../../enums/categories.enum';
import { levelEnum } from '../../../enums/level.enum';

export class CreateApplicantDto {
  @IsString()
  @IsEmail()
  @IsOptional()
  email: string;

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
