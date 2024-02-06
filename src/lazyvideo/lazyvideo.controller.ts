// lazyvideo.controller.ts

import { Controller, Get, Query, Res } from '@nestjs/common';
import { LazyvideoService } from './lazyvideo.service';
import { LiveService } from 'src/live/live.service';
import { Response } from 'express';
import { ApiTags,ApiOperation } from '@nestjs/swagger';

@Controller('lazyvideo')
export class LazyvideoController {
  constructor(private readonly lazyvideoService: LazyvideoService) {}
  
  @ApiTags('视频跳转')
  @ApiOperation({ summary: '直接跳转视频' })
  @Get('playurl')
  async getPlayUrl(@Query('url') encodedUrl: string, @Res() res: Response) {
    try {

      // 使用正则表达式提取BV号
      const match = encodedUrl.match(/BV([a-zA-Z0-9]{10})/);
      const bvid = match ? match[1] : null;

      if (!bvid) {
        throw new Error('Invalid URL. BV number not found.');
      }

      const playUrl = await this.lazyvideoService.getPlayUrl(bvid);

      // 获取播放地址
      const videoUrl = playUrl?.data?.durl?.[0]?.url;

      if (videoUrl) {
        // 重定向到获取到的播放地址
        res.redirect(videoUrl);
      } else {
        throw new Error('Failed to retrieve video URL.');
      }
    } catch (error) {
      throw new Error(`Failed to get playurl: ${error.message}`);
    }
  }
}



