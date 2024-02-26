import { Module } from '@nestjs/common';
import { LazyvideoService } from './player.service';
import { LazyvideoController } from './player.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [LazyvideoService],
  controllers: [LazyvideoController],
  imports: [ConfigModule.forRoot()],
})
export class LazyvideoModule {}
