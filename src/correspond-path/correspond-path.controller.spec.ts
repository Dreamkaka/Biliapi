import { Test, TestingModule } from '@nestjs/testing';
import { CorrespondPathController } from './correspond-path.controller';

describe('CorrespondPathController', () => {
  let controller: CorrespondPathController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorrespondPathController],
    }).compile();

    controller = module.get<CorrespondPathController>(CorrespondPathController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
