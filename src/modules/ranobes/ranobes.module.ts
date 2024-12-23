import { Module } from '@nestjs/common';
import { RanobesController } from './ranobes.controller';
import { RanobesService } from './ranobes.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ranobe } from './models/ranobe.model';
import { Tag } from './models/tag.model';
import { RanobeTags } from './models/ranobeTags.model';

@Module({
  imports: [SequelizeModule.forFeature([Ranobe, Tag, RanobeTags])],
  controllers: [RanobesController],
  providers: [RanobesService],
})
export class RanobesModule {}
