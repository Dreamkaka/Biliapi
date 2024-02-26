import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PixivService {
    async getRandom(max: number,mode: string) {
        try {
            const response = await axios.get('https://pixiv-now.xiaohan-kaka.gay/api/illust/random',{
                params:{
                    max,
                    mode,
                    type: 'json'
                }
            });
            return response.data
        } catch (error) {
            throw new Error(`获取随机插画失败: ${error.message}`);
        }
    }
}
