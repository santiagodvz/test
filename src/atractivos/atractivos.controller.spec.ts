import { Test, TestingModule } from '@nestjs/testing';
import { AtractivosController } from './atractivos.controller';
import { AtractivosService } from './atractivos.service';

describe('AtractivosController', () => {
  let controller: AtractivosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtractivosController],
      providers: [AtractivosService],
    }).compile();

    controller = module.get<AtractivosController>(AtractivosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
