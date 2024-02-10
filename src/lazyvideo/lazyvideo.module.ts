import { Module } from '@nestjs/common';
import { LazyvideoService } from './lazyvideo.service';
import { LazyvideoController } from './lazyvideo.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [LazyvideoService],
  controllers: [LazyvideoController],
  imports: [ConfigModule.forRoot()],
})
export class LazyvideoModule {}
