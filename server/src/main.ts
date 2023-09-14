import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 전역 검증 파이프 적용
  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist: true,
      transform: true, // 일반 JavaScript객체로 클라이언트에서 보내는 요청을 컨트롤러에서 원하는 자료형으로 바꿀 수 있게
    }),
  );

  await app.listen(5425);
}
bootstrap();
