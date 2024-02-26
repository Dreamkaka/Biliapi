import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class InfoService {
    constructor(private readonly configService: ConfigService) {}
    async getvideodetail(bvid: string) {
        const SESSDATA = this.configService.get<string>('SESSDATA');
        try {
            const response = await axios.get(`https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`, {
             headers: {
                Cookie: `${SESSDATA}`,
             }
            });
            return response.data;
   
        } catch (error) {
            throw new Error('获取视频详情失败');
        }
        
    } 
        }
    

