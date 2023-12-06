import { Test, TestingModule } from '@nestjs/testing';
import { SmartController } from './smart.controller';

describe('SmartController', () => {
  let controller: SmartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmartController],
    }).compile();

    controller = module.get<SmartController>(SmartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
