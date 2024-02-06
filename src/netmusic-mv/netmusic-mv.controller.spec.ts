import { Test, TestingModule } from '@nestjs/testing';
import { NetmusicMvController } from './netmusic-mv.controller';

describe('NetmusicMvController', () => {
  let controller: NetmusicMvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NetmusicMvController],
    }).compile();

    controller = module.get<NetmusicMvController>(NetmusicMvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
