import { Test, TestingModule } from '@nestjs/testing';
import { GetvideoService } from './getvideo.service';

describe('GetvideoService', () => {
  let service: GetvideoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetvideoService],
    }).compile();

    service = module.get<GetvideoService>(GetvideoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
