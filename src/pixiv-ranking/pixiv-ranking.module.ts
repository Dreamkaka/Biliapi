import { Module } from '@nestjs/common';
import { PixivRankingController } from './pixiv-ranking.controller';
import { PixivRankingService } from './pixiv-ranking.service';

@Module({
  controllers: [PixivRankingController],
  providers: [PixivRankingService]
})
export class PixivRankingModule {}
