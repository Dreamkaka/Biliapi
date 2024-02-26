import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule],
  controllers: [SearchController],
  providers: [SearchService]
})
export class SearchModule {}
