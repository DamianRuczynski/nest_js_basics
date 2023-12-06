import { Test, TestingModule } from '@nestjs/testing';
import { InterceptController } from './intercept.controller';

describe('InterceptController', () => {
  let controller: InterceptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterceptController],
    }).compile();

    controller = module.get<InterceptController>(InterceptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
