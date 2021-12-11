import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferCoinComponent } from './refer-coin.component';

describe('ReferCoinComponent', () => {
  let component: ReferCoinComponent;
  let fixture: ComponentFixture<ReferCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
