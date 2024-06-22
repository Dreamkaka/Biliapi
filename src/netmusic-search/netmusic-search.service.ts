import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class NetmusicSearchService {
     async search(keywords: string, limit: number): Promise<any> {
      const url = 'https://music-api.xiaohan-kaka.me/search';
      const params = {keywords, limit};

      try {
        const response = await axios.get(url, {params});
        return response.data.result;
      } catch (error) {
        throw new Error(`搜索失败: ${error.message}`);
      }
}
}