import { Controller, Get, Query } from '@nestjs/common';
import { GetvideoService } from './getvideo.service';
import { ApiTags,ApiOperation } from '@nestjs/swagger';

@Controller('getvideo')
export class GetvideoController {
 constructor(private readonly getvideoService: GetvideoService) {}

 @ApiTags('获取数据')
 @ApiOperation({ summary: '获取视频地址' })
 @Get('url')
 async getPlayUrl(@Query('bvid') bvid: string) {
     try {
        const playurl = await this.getvideoService.getPlayUrl(bvid);
        return playurl;
     } catch (error) {
        throw new error('获取播放地址失败');
     }
 }
}
