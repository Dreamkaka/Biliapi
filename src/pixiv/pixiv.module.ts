import { Module } from '@nestjs/common';
import { PixivController } from './pixiv.controller';
import { PixivService } from './pixiv.service';

@Module({
  controllers: [PixivController],
  providers: [PixivService]
})
export class PixivModule {}
