import { Test, TestingModule } from '@nestjs/testing';
import { NetmusicMvService } from './netmusic-mv.service';

describe('NetmusicMvService', () => {
  let service: NetmusicMvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetmusicMvService],
    }).compile();

    service = module.get<NetmusicMvService>(NetmusicMvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
