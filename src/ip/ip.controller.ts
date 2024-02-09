import { Controller, Get } from '@nestjs/common';
import axios from 'axios';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('ip')
export class IpController {

 @ApiTags('有用的工具')
 @ApiOperation({ summary: '获取ip' })   
 @Get('/')
 async getIp() {
  const response = await axios.get('https://api.bilibili.com/x/web-interface/zone');
  return response.data
 } catch (error) {
  throw new Error('无法获取ip ' + error.message);
 }
}