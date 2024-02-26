import { Test, TestingModule } from '@nestjs/testing';
import { NetmusicSearchService } from './netmusic-search.service';

describe('NetmusicSearchService', () => {
  let service: NetmusicSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetmusicSearchService],
    }).compile();

    service = module.get<NetmusicSearchService>(NetmusicSearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
