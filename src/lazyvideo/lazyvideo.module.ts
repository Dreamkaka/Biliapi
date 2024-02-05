import { Module } from '@nestjs/common';
import { LazyvideoService } from './lazyvideo.service';
import { LazyvideoController } from './lazyvideo.controller';

@Module({
  providers: [LazyvideoService],
  controllers: [LazyvideoController],
})
export class LazyvideoModule {}
