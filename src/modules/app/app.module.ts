import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { RanobesModule } from '../ranobes/ranobes.module';
import { UserModel } from 'src/models/users.model';
import { Tag } from '../ranobes/models/tag.model';
import { RanobeTags } from '../ranobes/models/ranobeTags.model';
import { Ranobe } from '../ranobes/models/ranobe.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: configService.get('DB_DIALECT'),
        host: configService.get('DB_HOST'),
        port: Number(configService.get('DB_PORT')),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        models: [Ranobe, Tag, UserModel, RanobeTags],
      }),
    }),
    RanobesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
