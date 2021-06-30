import { Test, TestingModule } from '@nestjs/testing';
import { CategoriseService } from './categorise.service';

describe('CategoriseService', () => {
  let service: CategoriseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriseService],
    }).compile();

    service = module.get<CategoriseService>(CategoriseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
