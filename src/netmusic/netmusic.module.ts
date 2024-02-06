import { Module } from '@nestjs/common';
import { NetmusicService } from './netmusic.service';
import { NetmusicController } from './netmusic.controller';

@Module({
  providers: [NetmusicService],
  controllers: [NetmusicController]
})
export class NetmusicModule {}
