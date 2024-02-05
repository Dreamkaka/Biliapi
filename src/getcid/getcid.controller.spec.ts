import { Test, TestingModule } from '@nestjs/testing';
import { GetcidController } from './getcid.controller';

describe('GetcidController', () => {
  let controller: GetcidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetcidController],
    }).compile();

    controller = module.get<GetcidController>(GetcidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
