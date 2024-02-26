import { Test, TestingModule } from '@nestjs/testing';
import { PixivService } from './pixiv.service';

describe('PixivService', () => {
  let service: PixivService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PixivService],
    }).compile();

    service = module.get<PixivService>(PixivService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
