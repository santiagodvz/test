import { Test, TestingModule } from '@nestjs/testing';
import { AtractivosService } from './atractivos.service';

describe('AtractivosService', () => {
  let service: AtractivosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtractivosService],
    }).compile();

    service = module.get<AtractivosService>(AtractivosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
