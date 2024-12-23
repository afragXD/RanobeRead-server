import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
} from 'sequelize-typescript';
import { Ranobe } from './ranobe.model';
import { Tag } from './tag.model';

@Table({
  tableName: 'RanobeTags',
  underscored: true,
})
export class RanobeTags extends Model {
  @ForeignKey(() => Ranobe)
  @Column
  ranobeId: number;

  @ForeignKey(() => Tag)
  @Column
  tagId: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
