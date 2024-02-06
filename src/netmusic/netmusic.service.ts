import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class NetmusicService {
    async getSongUrl(id: string) {
        try {
            const response = await axios.get(`https://music-api.xiaohan-kaka.gay/song/url/v1?id=${id}&level=standard`);

            return response.data;
        } catch (error) {
            throw new Error('获取歌曲链接失败');
        }
    }
}
