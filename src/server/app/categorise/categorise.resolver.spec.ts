import { Test, TestingModule } from '@nestjs/testing';
import { CategoriseResolver } from './categorise.resolver';
import { CategoriseService } from './categorise.service';

describe('CategoriseResolver', () => {
  let resolver: CategoriseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriseResolver, CategoriseService],
    }).compile();

    resolver = module.get<CategoriseResolver>(CategoriseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
