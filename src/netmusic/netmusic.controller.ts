import { Controller, Get, Query, Redirect} from '@nestjs/common';
import { NetmusicService } from './netmusic.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import axios from 'axios';
@Controller('netmusic')
export class NetmusicController {
    constructor(private readonly netmusicService: NetmusicService) {}
    
    @ApiTags('网易云相关')
    @ApiOperation({ summary: '获取歌曲数据' })
    @Get('url')
    async getSongUrl(@Query('id') id: string) {
        try {
            return await this.netmusicService.getSongUrl(id);
        } catch (error) {
            throw new Error('获取歌曲链接失败');
        }
    }

    // 本来想写一个直接获取跳转接口，但是网易云的网址真的太刁钻了一直写不出识别的方法，后续填坑吧，现在的版本还是得先填id才能跳转
    
    @ApiTags('网易云相关')
    @ApiOperation({ summary: '直接跳转到对应歌曲的mp3' })
    @Get('play')
    @Redirect()
    async playSong(@Query('id') id: string) {
      try {
        // 获取音乐 URL
        const mp3Url = await this.fetchSongUrl(id);
        return { url: mp3Url }; // 重定向到提取的 mp3 链接
      } catch (error) {
        throw new Error(`Failed to fetch song URL: ${error.message}`);
      }
    }
  
    private async fetchSongUrl(id: string) {
      try {
        // 发送请求获取音乐 URL
        const response = await axios.get(`https://music-api.xiaohan-kaka.gay/song/url/v1?id=${id}&level=standard`);
     //   console.log('Response data:', response.data); // 输出获取到的数据
        const { data } = response;
        if (!data || !Array.isArray(data.data) || data.data.length === 0) {
          throw new Error('Invalid response data');
        }
        // 取第一个元素的 url 字段作为 mp3 链接
        const mp3Url = data.data[0].url;
        return mp3Url;
      } catch (error) {
        throw new Error(`Failed to fetch song URL: ${error.message}`);
      }
    }
}
