import { Module } from '@nestjs/common';
import { IpController } from './ip.controller';

@Module({
  controllers: [IpController]
})
export class IpModule {}
