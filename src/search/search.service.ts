import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class SearchService {
    constructor(private ConfigService: ConfigService) {
        
    }
    async search(keyword: string, page: number): Promise<any> {
        try {
          const response = await axios.get('https://api.bilibili.com/x/web-interface/search/type', {
            params: {
              search_type: 'video',
              keyword,
              page,
            },
            headers: {
              Cookie: `${this.ConfigService.get<string>('SESSDATA')}`,
            },
          });
          return response.data.data.result;
        } catch (error) {
          // 处理错误
          console.error(error);
          throw new Error('搜索出错');
        }
      }
    }

