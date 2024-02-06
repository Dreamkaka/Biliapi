import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetcidModule } from './getcid/getcid.module';
import { GetvideoModule } from './getvideo/getvideo.module';
import { LazyvideoModule } from './lazyvideo/lazyvideo.module';
import { LiveModule } from './live/live.module';
import { NetmusicModule } from './netmusic/netmusic.module';
import { NetmusicMvModule } from './netmusic-mv/netmusic-mv.module';

@Module({
  imports: [GetcidModule,GetvideoModule,LazyvideoModule,LiveModule, NetmusicModule, NetmusicMvModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
