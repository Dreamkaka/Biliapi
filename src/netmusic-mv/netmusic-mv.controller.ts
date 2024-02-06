import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { NetmusicMvService } from './netmusic-mv.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('netmusic-mv')
export class NetmusicMvController {
  constructor(private readonly netmusicMvService: NetmusicMvService) {}
  
  @ApiTags('网易云相关')
  @ApiOperation({ summary: '获取MVurl' })
  @Get('url')
  async getMvUrl(@Query('id') id: string) {
    try {
      // 调用 service 获取 MV URL
      const mvUrl = await this.netmusicMvService.getMvUrl(id);

      // 返回 MV URL
      return mvUrl;
    } catch (error) {
      // 处理错误情况
      throw new Error(`Failed to fetch MV URL: ${error.message}`);
    }
  }
  
  @ApiTags('网易云相关')
  @ApiOperation({ summary: '重定向至mvurl' })
  @Get('playurl')
  async getMvPlayUrl(@Query('id') id: string, @Res() res: Response) {
    try {
      // 调用 service 获取 MV URL
      const mvUrl = await this.netmusicMvService.getMvUrl(id);

      // 重定向到 MV URL
      return res.redirect(mvUrl);
    } catch (error) {
      // 处理错误情况
      throw new Error(`Failed to fetch MV URL: ${error.message}`);
    }
  }
}
