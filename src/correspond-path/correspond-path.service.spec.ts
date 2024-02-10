import { Test, TestingModule } from '@nestjs/testing';
import { CorrespondPathService } from './correspond-path.service';

describe('CorrespondPathService', () => {
  let service: CorrespondPathService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorrespondPathService],
    }).compile();

    service = module.get<CorrespondPathService>(CorrespondPathService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
