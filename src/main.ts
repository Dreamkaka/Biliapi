import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('bli-download')
  .setDescription('一个简单的哔哩哔哩解析和其他的接口聚合')
  .setVersion('1.2.2')
//  .addTag('cats')
  .build()

const document = SwaggerModule.createDocument(app, config)
/* ... */

const OpenApiSpecification =
  /* … */

  app.use(
    '/docs',
    apiReference({
      theme: 'deepSpace',
      spec: {
        content: document,
      },
    }),
  )

  await app.listen(3000);
}
bootstrap();
