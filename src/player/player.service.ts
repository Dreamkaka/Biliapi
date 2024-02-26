// lazyvideo.service.ts

import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LazyvideoService {
  private readonly cookie: string; // 声明 cookie 属性

  constructor(private readonly configService: ConfigService) { // 注入 ConfigService
    this.cookie = this.configService.get('SESSDATA'); // 使用 ConfigService 获取环境变量
  }

  async getCid(bvid: string) {
    const apiUrl = 'https://api.bilibili.com/x/player/pagelist';

    const params = {
      bvid,
      // 其他参数根据实际需要添加
    };

    try {
      const response = await axios.get(apiUrl, { params, headers: { 'Cookie': this.cookie } });
      const cid = response.data.data[0].cid;
      return cid;
    } catch (error) {
      throw new Error(`Failed to fetch cid: ${error.message}`);
    }
  }

  async getPlayUrl(bvid: string) {
    const cid = await this.getCid(bvid);
    const apiUrl = 'https://api.bilibili.com/x/player/playurl';

    // 添加固定参数
    const params = {
      bvid,
      cid,
      qn: 80,
      platform: 'html5',
      high_quality: 1,
      // 其他参数根据实际需要添加
    };

    try {
      const response = await axios.get(apiUrl, { params, headers: { 'Cookie': this.cookie } });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch playurl: ${error.message}`);
    }
  }
}
