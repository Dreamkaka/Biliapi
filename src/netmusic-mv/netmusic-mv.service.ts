import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class NetmusicMvService {
  async getMvUrl(id: string): Promise<string> {
    try {
      // 构建请求 URL
      const apiUrl = `https://music-api.xiaohan-kaka.me/mv/url?id=${id}`;
      
      // 发送 GET 请求
      const response = await axios.get(apiUrl);
      
      // 获取 MV URL
      const mvUrl = response.data.data.url;
      
      return mvUrl;
    } catch (error) {
      // 处理错误情况
      throw new Error(`Failed to fetch MV URL: ${error.message}`);
    }
  }
}
