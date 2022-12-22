import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAllComponent } from './seller-all.component';

describe('SellerAllComponent', () => {
  let component: SellerAllComponent;
  let fixture: ComponentFixture<SellerAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
