import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
   .setTitle('VRCAX')
   .setDescription('一个简单的接口集合，用于为vrchat内的视频播放器提供解析支持')
   .setVersion('1.2')
  // .addTag('bilibili')
   .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
