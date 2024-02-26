import { Module } from '@nestjs/common';
import { NetmusicSearchController } from './netmusic-search.controller';
import { NetmusicSearchService } from './netmusic-search.service';

@Module({
  controllers: [NetmusicSearchController],
  providers: [NetmusicSearchService]
})
export class NetmusicSearchModule {}
