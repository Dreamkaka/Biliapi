// lazyvideo.service.ts

import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LazyvideoService {
  private readonly cookie: string = 'SESSDATA=e1d83f51%2C1722531145%2Cf0627%2A21CjC7p6hesjKbhVYJ5nPUt_8dcdQpKOeWgHrRR5DlJgFBIeieK_1znZhKysdbrJ_Bh6gSVkQtNE5qOWRGOTVSYmJ6cGJyNkxLRDBtY0NTUUs2dTRiV0hJcWhBM0pmT2FtajFaaW9FWGNwWG92bE45UEwwMElEUG4tbkQzWFJpcWQ4Zko0M01FU3d3IIEC'; // 替换为你的实际 cookie 值

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
