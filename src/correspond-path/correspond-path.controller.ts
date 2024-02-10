// crypto.controller.ts
import { Controller, Get } from '@nestjs/common';
import { CorrespondPathService } from './correspond-path.service';
import * as moment from 'moment-timezone';
import { ApiTags,ApiOperation } from '@nestjs/swagger';

@Controller('crypto')
export class CorrespondPathController {
  constructor(private readonly CorrespondPathService : CorrespondPathService ) {}
  
  @ApiTags('有用的工具')
  @ApiOperation({ summary: '生成CorrespondPath' })
  @Get('')
  getHash(): { timestamp: string, hash: string } {
    const timestamp = moment().tz('Asia/Shanghai').format('x');
    const hash = this.CorrespondPathService .getHash(timestamp);
    return { timestamp, hash };
  }
}
