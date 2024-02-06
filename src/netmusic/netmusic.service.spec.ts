import { Test, TestingModule } from '@nestjs/testing';
import { NetmusicService } from './netmusic.service';

describe('NetmusicService', () => {
  let service: NetmusicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetmusicService],
    }).compile();

    service = module.get<NetmusicService>(NetmusicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
