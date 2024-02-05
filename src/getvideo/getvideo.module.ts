import { Module } from '@nestjs/common';
import { GetvideoController } from './getvideo.controller';
import { GetvideoService } from './getvideo.service';

@Module({
  controllers: [GetvideoController],
  providers: [GetvideoService]
})
export class GetvideoModule {}
