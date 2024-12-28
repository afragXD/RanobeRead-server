import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Ranobe } from './models/ranobe.model';
import { RanobeTags } from './models/ranobeTags.model';
import { Tag } from './models/tag.model';

@Injectable()
export class RanobesService {
  constructor(
    @InjectModel(Ranobe)
    private readonly postsRepository: typeof Ranobe,
    @InjectModel(RanobeTags)
    private readonly postTagsRepository: typeof RanobeTags,
  ) {}

  async getTop(limit: number = 15) {
    try {
      const topRanobe = await Ranobe.findAll({
        order: [['rating', 'DESC']],
        limit,
        attributes: ['id', 'name', 'rating', 'image'],
        include: [
          {
            model: Tag,
            as: 'tags',
            attributes: ['id', 'name'],
            through: { attributes: [] },
          },
        ],
      });
      return topRanobe;
    } catch (error) {
      throw new Error(`Failed to retrieve top ranobe: ${error.message}`);
    }
  }
  async getRanobes(limit: number = 15) {
    try {
      const topRanobe = await Ranobe.findAll({
        order: [['updatedAt', 'DESC']],
        limit,
        attributes: ['id', 'name', 'description', 'rating', 'image', 'updatedAt'],
        include: [
          {
            model: Tag,
            as: 'tags',
            attributes: ['id', 'name'],
            through: { attributes: [] },
          },
        ],
      });
      return topRanobe;
    } catch (error) {
      throw new Error(`Failed to retrieve top ranobe: ${error.message}`);
    }
  }
}
