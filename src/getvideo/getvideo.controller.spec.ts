import { Test, TestingModule } from '@nestjs/testing';
import { GetvideoController } from './getvideo.controller';

describe('GetvideoController', () => {
  let controller: GetvideoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetvideoController],
    }).compile();

    controller = module.get<GetvideoController>(GetvideoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
