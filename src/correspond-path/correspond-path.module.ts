import { Module } from '@nestjs/common';
import { CorrespondPathService } from './correspond-path.service';
import { CorrespondPathController } from './correspond-path.controller';

@Module({
  providers: [CorrespondPathService],
  controllers: [CorrespondPathController]
})
export class CorrespondPathModule {}
