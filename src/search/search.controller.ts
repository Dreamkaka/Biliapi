import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import axios from 'axios';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}
  
  @ApiTags('搜索相关')
  @ApiOperation({ summary: '搜索相关视频' })
  @Get('')
  async search(
    @Query('keyword') keyword: string,
    @Query('page') page: number
    ): Promise<any> {
      
     try {
       return await this.searchService.search(keyword, page);
     } catch (error) {
       throw new Error(`搜索失败: ${error.message}`);
     }
  }
  
  @ApiTags('搜索相关')
  @ApiOperation({ summary: '获取搜索热词' })
  @Get('hot')
  async gethot() {
    const response = await axios.get('https://s.search.bilibili.com/main/hotword');
    return response.data.list;
   } catch (error) {
    throw new Error('无法获取搜索热词 ' + error.message);
   }
  

}
