import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  
  const port = process.env.PORT || 3333;
  await app.listen(port);
}
bootstrap();
