import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  BelongsToMany,
} from 'sequelize-typescript';
import { Tag } from './tag.model';
import { RanobeTags } from './ranobeTags.model';

@Table({
  tableName: 'Ranobe',
  underscored: true,
})
export class Ranobe extends Model {
  @Column({
    allowNull: false,
  })
  name: string;

  @Column
  enName: string;

  @Column
  image: string;

  @Column
  description: string;

  @Column({
    allowNull: false,
    defaultValue: 0,
  })
  rating: number;

  @Column({
    allowNull: false,
    defaultValue: 0,
  })
  ratingCount: number;

  @Column({
    allowNull: false,
  })
  status: string;

  @Column({
    allowNull: false,
    defaultValue: 0,
  })
  chapters: number;

  @Column
  year: number;

  // @ForeignKey(() => Author)
  @Column({
    allowNull: false,
  })
  authorId: number;

  // @BelongsTo(() => Author, 'authorId')
  // author: Author;

  // @ForeignKey(() => Country)
  @Column({
    allowNull: false,
  })
  countryId: number;

  // @BelongsTo(() => Country, 'countryId')
  // country: Country;

  @Column
  translatorId: number;

  @BelongsToMany(() => Tag, () => RanobeTags)
  tags: Tag[];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
