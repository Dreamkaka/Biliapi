import { Test, TestingModule } from '@nestjs/testing';
import { LazyvideoController } from './player.controller';

describe('LazyvideoController', () => {
  let controller: LazyvideoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LazyvideoController],
    }).compile();

    controller = module.get<LazyvideoController>(LazyvideoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
