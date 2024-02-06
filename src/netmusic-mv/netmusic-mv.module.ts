import { Module } from '@nestjs/common';
import { NetmusicMvController } from './netmusic-mv.controller';
import { NetmusicMvService } from './netmusic-mv.service';

@Module({
  controllers: [NetmusicMvController],
  providers: [NetmusicMvService]
})
export class NetmusicMvModule {}
