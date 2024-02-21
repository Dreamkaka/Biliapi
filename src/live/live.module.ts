import { Module } from '@nestjs/common';
import { LiveController } from './live.controller';
import { LiveService, flvservice } from './live.service';

@Module({
  controllers: [LiveController],
  providers: [LiveService]
})
export class LiveModule {}
