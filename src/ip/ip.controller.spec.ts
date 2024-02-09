import { Test, TestingModule } from '@nestjs/testing';
import { IpController } from './ip.controller';

describe('IpController', () => {
  let controller: IpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IpController],
    }).compile();

    controller = module.get<IpController>(IpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
