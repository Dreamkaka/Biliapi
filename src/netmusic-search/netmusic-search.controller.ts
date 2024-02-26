import { Controller, Get, Query } from '@nestjs/common';
import { NetmusicSearchService } from './netmusic-search.service';
import axios from 'axios';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('netmusic-search')
export class NetmusicSearchController {
    constructor(private readonly netmusicSearchService: NetmusicSearchService) {}
    

    @ApiTags('网易云相关')
    @ApiOperation({ summary: '搜索歌曲' })
    @Get('')
    async search(
        @Query('keywords') keyword: string,
        @Query('limit') limit: number
    ): Promise<any> {
   
            return await this.netmusicSearchService.search(keyword, limit);
        } 
     
    @ApiTags('网易云相关')
    @ApiOperation({ summary: '获取搜索热词' })
     @Get('hot')
    async gethot() {
        const response = await axios.get('https://music-api.xiaohan-kaka.gay/search/hot/detail');
        return response.data.data
    } catch (error) {
        throw new Error('无法获取搜索热词 ' + error.message);
    }

        }

