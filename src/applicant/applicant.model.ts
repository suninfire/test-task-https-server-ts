import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'applicants' })
export class Applicant extends Model<Applicant> {
  @Column({
    type: DataType.STRING,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: true,
  })
  email: string;
  // , trim: true, lowercase: true, required:true, unique:true},

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  categories: string;
  // ,enum: Object.values(categoryEnum), ,trim: true, lowercase: true},

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  japaneseKnowledge: boolean;
  // required:true},

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  level: string;
  // ,enum: Object.values(levelEnum) trim: true, lowercase: true},
}
