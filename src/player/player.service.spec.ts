import { Test, TestingModule } from '@nestjs/testing';
import { LazyvideoService } from './lazyvideo.service';

describe('LazyvideoService', () => {
  let service: LazyvideoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LazyvideoService],
    }).compile();

    service = module.get<LazyvideoService>(LazyvideoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
