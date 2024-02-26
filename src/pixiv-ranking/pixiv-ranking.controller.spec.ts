import { Test, TestingModule } from '@nestjs/testing';
import { PixivRankingController } from './pixiv-ranking.controller';

describe('PixivRankingController', () => {
  let controller: PixivRankingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PixivRankingController],
    }).compile();

    controller = module.get<PixivRankingController>(PixivRankingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
