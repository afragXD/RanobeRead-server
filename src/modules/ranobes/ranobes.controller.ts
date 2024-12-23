import { Controller, Get } from '@nestjs/common';
import { RanobesService } from './ranobes.service';
import { Ranobe } from './models/ranobe.model';

@Controller('ranobe')
export class RanobesController {
  constructor(private readonly ranobeService: RanobesService) {}

  @Get('top')
  getTop(): Promise<Ranobe[]> {
    return this.ranobeService.getTop();
  }

  @Get()
  getRanobes(): Promise<Ranobe[]> {
    return this.ranobeService.getRanobes();
  }
}
