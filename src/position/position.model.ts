import { Column, DataType, Model, Table } from 'sequelize-typescript';
@Table({ tableName: 'positions' })
export class Position extends Model<Position> {
  @Column({
    type: DataType.STRING,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  company: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description: string;

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
