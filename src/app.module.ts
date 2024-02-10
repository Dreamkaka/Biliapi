import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetcidModule } from './getcid/getcid.module';
import { GetvideoModule } from './getvideo/getvideo.module';
import { LazyvideoModule } from './lazyvideo/lazyvideo.module';
import { LiveModule } from './live/live.module';
import { NetmusicModule } from './netmusic/netmusic.module';
import { NetmusicMvModule } from './netmusic-mv/netmusic-mv.module';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health/health.controller';
import { HealthModule } from './health/health.module';
import { ConfigModule } from '@nestjs/config';
import { IpModule } from './ip/ip.module';



@Module({
  imports: [GetcidModule,GetvideoModule,LazyvideoModule,LiveModule, NetmusicModule, NetmusicMvModule,TerminusModule, HealthModule,ConfigModule.forRoot(), IpModule,],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
