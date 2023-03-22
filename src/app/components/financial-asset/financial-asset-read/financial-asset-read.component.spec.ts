import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialAssetReadComponent } from './financial-asset-read.component';

describe('FinancialAssetReadComponent', () => {
  let component: FinancialAssetReadComponent;
  let fixture: ComponentFixture<FinancialAssetReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialAssetReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialAssetReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
