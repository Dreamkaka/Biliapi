import { Controller, Get, Query } from '@nestjs/common';
import { InfoService } from './info.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';


@Controller('info')
export class InfoController {
 constructor(private readonly infoService: InfoService) {}
    
 @ApiTags('获取数据')
 @ApiOperation({ summary: '获取视频信息' })
    @Get('')
    async getvideodetail(@Query('bvid') bvid: string) {
        return await this.infoService.getvideodetail(bvid);
    }
}
