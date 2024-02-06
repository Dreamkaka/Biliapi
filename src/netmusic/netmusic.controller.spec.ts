import { Test, TestingModule } from '@nestjs/testing';
import { NetmusicController } from './netmusic.controller';

describe('NetmusicController', () => {
  let controller: NetmusicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NetmusicController],
    }).compile();

    controller = module.get<NetmusicController>(NetmusicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
