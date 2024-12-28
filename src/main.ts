import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './modules/app/app.module';
import { readFileSync } from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: readFileSync('./secrets/private-key.pem'),
    cert: readFileSync('./secrets/certificate_big.pem'),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
      whitelist: true,
      transform: true,
    }),
  );
  app.enableCors();
  await app.listen(port);
}
bootstrap();
