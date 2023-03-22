import { TestBed } from '@angular/core/testing';

import { FinancialAssetService } from './financial-asset.service';

describe('FinancialAssetService', () => {
  let service: FinancialAssetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialAssetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
