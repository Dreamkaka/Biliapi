import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
   .setTitle('bli-download')
   .setDescription('一个简单的哔哩哔哩接口和其他的接口聚合')
   .setVersion('1.2.1')
  // .addTag('bilibili')
   .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
