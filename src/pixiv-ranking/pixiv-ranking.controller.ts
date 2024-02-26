import { Controller, Get, Query } from '@nestjs/common';
import { PixivRankingService } from './pixiv-ranking.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('pixiv-ranking')
export class PixivRankingController {
  constructor(private readonly pixivRankingService: PixivRankingService) {}
    
  @ApiTags('pixiv相关')
  @ApiOperation({ summary: '获取排行榜' })
  @Get('')
  async getRanking(
    @Query('mode') mode: string,
    @Query('content') content: string,
    @Query('p') p: number
  ) {
     return await this.pixivRankingService.getRanking(mode, content, p);
  }
}
