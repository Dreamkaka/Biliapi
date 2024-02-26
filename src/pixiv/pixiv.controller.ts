import { Controller, Get, Query } from '@nestjs/common';
import { PixivService } from './pixiv.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('pixiv')
export class PixivController {
constructor(private readonly pixivService: PixivService) {}    
    @ApiTags('pixiv相关')
    @ApiOperation({ summary: '获取随机图片' })
    @Get('random')
    async getRandom(@Query('max') max: number,@Query('mode') mode: string) {
        return await this.pixivService.getRandom(max,mode);
    }
}
