import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
   .setTitle('哔哩哔哩api')
   .setDescription('一个解析哔哩哔哩视频的接口')
   .setVersion('1.0')
  // .addTag('bilibili')
   .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
