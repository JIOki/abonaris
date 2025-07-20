import { Test, TestingModule } from '@nestjs/testing';
import { SrcController } from './src.controller';
import { SrcService } from './src.service';

describe('SrcController', () => {
  let controller: SrcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SrcController],
      providers: [SrcService],
    }).compile();

    controller = module.get<SrcController>(SrcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
