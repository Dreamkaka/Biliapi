// lazyvideo.service.ts

import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LazyvideoService {
  private readonly cookie: string = 'SESSDATA=2b8e0c0e%2C1722793325%2Ca0fb1%2A21CjBvJx_t9ICqWpX36aLNNe3YtgW_XCbuMlqLxWhW9vXGSEQ2Ao3GcXAuYIHxG3jpcd8SVkFjNHBGZ29kQ0JoN3VPTTYtRzFkUTZ0Sk1PTW83aDl2cnBySFFDS0JpMEFJVlA2ZDM3UUp2bnJTTXBUQllXcTFheTVLWno2MTZ3azE5Wkl5OWtFamFRIIEC'; // SESSDATA

  async getCid(bvid: string) {
    const apiUrl = 'https://api.bilibili.com/x/player/pagelist';

    const params = {
      bvid,
      // 其他参数根据实际需要添加
    };

    try {
      const response = await axios.get(apiUrl, { params, headers: { 'Cookie': this.cookie } });
      const cid = response.data.data[0].cid;
      return cid;
    } catch (error) {
      throw new Error(`Failed to fetch cid: ${error.message}`);
    }
  }

  async getPlayUrl(bvid: string) {
    const cid = await this.getCid(bvid);
    const apiUrl = 'https://api.bilibili.com/x/player/playurl';

    // 添加固定参数
    const params = {
      bvid,
      cid,
      qn: 80,
      platform: 'html5',
      high_quality: 1,
      // 其他参数根据实际需要添加
    };

    try {
      const response = await axios.get(apiUrl, { params, headers: { 'Cookie': this.cookie } });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch playurl: ${error.message}`);
    }
  }
}
