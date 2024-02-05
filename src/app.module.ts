import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetcidModule } from './getcid/getcid.module';
import { GetvideoModule } from './getvideo/getvideo.module';
import { LazyvideoModule } from './lazyvideo/lazyvideo.module';

@Module({
  imports: [GetcidModule,GetvideoModule,LazyvideoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
