import { Test, TestingModule } from '@nestjs/testing';
import { NavigationsResolver } from './navigations.resolver';
import { NavigationsService } from './navigations.service';

describe('NavigationsResolver', () => {
  let resolver: NavigationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NavigationsResolver, NavigationsService],
    }).compile();

    resolver = module.get<NavigationsResolver>(NavigationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
