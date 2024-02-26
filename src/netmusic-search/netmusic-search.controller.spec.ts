import { Test, TestingModule } from '@nestjs/testing';
import { NetmusicSearchController } from './netmusic-search.controller';

describe('NetmusicSearchController', () => {
  let controller: NetmusicSearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NetmusicSearchController],
    }).compile();

    controller = module.get<NetmusicSearchController>(NetmusicSearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
