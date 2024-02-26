import { Test, TestingModule } from '@nestjs/testing';
import { PixivController } from './pixiv.controller';

describe('PixivController', () => {
  let controller: PixivController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PixivController],
    }).compile();

    controller = module.get<PixivController>(PixivController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
