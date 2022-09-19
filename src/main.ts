import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as morgan from "morgan";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Morgan Logger MiddleWare
  app.use(morgan('dev'));
  // Validation Pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  await app.listen(3000);
}
bootstrap();
