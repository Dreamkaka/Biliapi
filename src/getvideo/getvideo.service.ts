import { Injectable } from '@nestjs/common'
import axios from 'axios'
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GetvideoService {
    private readonly cookie: string;

    constructor(private readonly configService: ConfigService) {
        this.cookie = this.configService.get<string>('SESSDATA');
    }
    async getcid(bvid: string) {
        const apiurl = 'https://api.bilibili.com/x/player/pagelist'

        const params = {
            bvid,
        };
        try {
            const response = await axios.get(apiurl, { params, headers: { 'cookie':this.cookie } });
            const cid = response.data.data[0].cid;
            return cid;
        } catch (error) {
            throw new Error('获取cid失败');
        }
    }

    async getPlayUrl(bvid: string) {
        const cid = await this.getcid(bvid);
        const apiUrl = 'https://api.bilibili.com/x/player/playurl';

        const params = {
            bvid,
            cid,
            qn: 80,
            platform: 'html5',
            high_quality: 1
        };

        try {
            const response = await axios.get(apiUrl, { params, headers: { 'cookie': this.cookie } });
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch playurl: ${error.message}`);
        }
    }
}