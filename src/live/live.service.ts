import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LiveService {
    async getlivestreamUrl(roomid: string) {
        try {
            const qn = 10000;
            const platform = 'h5';
            const response = await axios.get(`https://api.live.bilibili.com/room/v1/Room/playUrl?cid=${roomid}&platform=${platform}&qn=${qn}`);
            return response.data;
        } catch (error) {
            throw new Error("获取直播链接失败");
            
        }
    }
}
