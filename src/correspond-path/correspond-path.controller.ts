// crypto.controller.ts
import { Controller, Get } from '@nestjs/common';
import { CorrespondPathService } from './correspond-path.service';
import * as moment from 'moment-timezone';

@Controller('crypto')
export class CorrespondPathController {
  constructor(private readonly CorrespondPathService : CorrespondPathService ) {}

  @Get('')
  getHash(): { timestamp: string, hash: string } {
    const timestamp = moment().tz('Asia/Shanghai').format('x');
    const hash = this.CorrespondPathService .getHash(timestamp);
    return { timestamp, hash };
  }
}
