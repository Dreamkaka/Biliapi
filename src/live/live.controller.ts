import { Controller, Get, Query, Res } from '@nestjs/common';
import { LiveService } from './live.service';
import { flvservice } from './live.service';
import { Response } from 'express';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('live')
export class LiveController {
    constructor(private readonly liveService: LiveService) {}

    @ApiTags('获取数据')
    @ApiOperation({ summary: '获取直播链接' })
    @Get('liveUrl')
    async getLiveStreamUrl(@Query('roomid') roomid: string) {
        return await this.liveService.getlivestreamUrl(roomid); // 修改此处调用为 getlivestreamUrl
    }

    @ApiTags('视频跳转')
    @ApiOperation({ summary: '播放直播流' })
    @Get('playlive')
    async playLiveStream(@Query('url') url: string, @Res() res: Response) {
        try {
            // 使用正则表达式提取链接中的房间ID
            const roomIdMatch = url.match(/live\.bilibili\.com\/(\d+)/);
            const roomId = roomIdMatch ? roomIdMatch[1] : null;

            if (!roomId) {
                throw new Error('未找到房间号，确保你的房间号不是短号');
            }

            // 调用 LiveService 获取直播链接
            const liveData = await this.liveService.getlivestreamUrl(roomId);
            const streamUrl = liveData?.data?.durl?.[0]?.url;

            if (streamUrl) {
                // 如果获取到直播流 URL，则重定向到该 URL
                return res.redirect(streamUrl);
            } else {
                throw new Error('无法跳转');
            }
        } catch (error) {
            return res.status(500).json({ message: `无法播放直播: ${error.message}` });
        }
    }

// 待办：flv直播

}
