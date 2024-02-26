import { Test, TestingModule } from '@nestjs/testing';
import { PixivRankingService } from './pixiv-ranking.service';

describe('PixivRankingService', () => {
  let service: PixivRankingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PixivRankingService],
    }).compile();

    service = module.get<PixivRankingService>(PixivRankingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
