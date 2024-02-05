import { Module } from '@nestjs/common';
import { GetcidController } from './getcid.controller';

@Module({
  controllers: [GetcidController],
})
export class GetcidModule {}
