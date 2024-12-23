import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  BelongsToMany,
} from 'sequelize-typescript';
import { RanobeTags } from './ranobeTags.model';
import { Ranobe } from './ranobe.model';

@Table({
  tableName: 'Tag',
  underscored: true,
})
export class Tag extends Model {
  @Column({
    allowNull: false,
    unique: true,
  })
  name: string;

  @BelongsToMany(() => Ranobe, () => RanobeTags)
  posts: Ranobe[];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
