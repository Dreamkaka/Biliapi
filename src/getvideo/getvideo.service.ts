import { Injectable } from '@nestjs/common'
import axios from 'axios'

@Injectable()
export class GetvideoService {
    private readonly cookie: string = 'SESSDATA=2b8e0c0e%2C1722793325%2Ca0fb1%2A21CjBvJx_t9ICqWpX36aLNNe3YtgW_XCbuMlqLxWhW9vXGSEQ2Ao3GcXAuYIHxG3jpcd8SVkFjNHBGZ29kQ0JoN3VPTTYtRzFkUTZ0Sk1PTW83aDl2cnBySFFDS0JpMEFJVlA2ZDM3UUp2bnJTTXBUQllXcTFheTVLWno2MTZ3azE5Wkl5OWtFamFRIIEC' // sessdata
    async getcid(bvid: string) {
        const apiurl = 'https://api.bilibili.com/x/player/pagelist'

        const params = {
            bvid,
        };
        try {
            const response = await axios.get(apiurl, { params, headers: { 'cookie': this.cookie } });
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