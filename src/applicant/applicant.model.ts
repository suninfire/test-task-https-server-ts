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
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  })
  categories: string[];

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  japaneseKnowledge: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  level: string;
}
