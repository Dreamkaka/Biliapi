import { Controller, Get, Param } from '@nestjs/common';
import axios from 'axios';
import { ApiTags,ApiOperation } from '@nestjs/swagger';

@Controller('getcid')
export class GetcidController {
  
  @ApiTags('获取数据')
  @ApiOperation({ summary: '获取视频cid' })
  @Get(':videoId')
  async getVideoInfo(@Param('videoId') videoId: string) {
    try {
      const response = await axios.get(`https://api.bilibili.com/x/player/pagelist?bvid=${videoId}`);
      const videoInfo = response.data; // 这里假设返回的数据是 JSON 格式的
      return videoInfo;
    } catch (error) {
      // 处理错误
      console.error(error);
      throw new Error('Failed to fetch video information');
    }
  }
}
