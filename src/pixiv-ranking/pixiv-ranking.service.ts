import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PixivRankingService {
    async getRanking(mode: string,content: string,p: number){
       try {
        const response = await axios.get('https://pixiv-now.xiaohan-kaka.gay/ranking.php',{
            params:{
                format: 'json',
                mode,
                content,
                p
            }
        });
        return response.data.contents;
       } catch (error) {
        throw new Error(`获取排行榜失败: ${error.message}`);
       }
    }
}
