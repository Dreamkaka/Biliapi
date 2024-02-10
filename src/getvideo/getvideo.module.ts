import { Module } from '@nestjs/common';
import { GetvideoController } from './getvideo.controller';
import { GetvideoService } from './getvideo.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [GetvideoController],
  providers: [GetvideoService],
  imports: [ConfigModule.forRoot()],
})
export class GetvideoModule {}
