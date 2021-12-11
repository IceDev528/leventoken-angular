import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevenTokenPostingComponent } from './leven-token-posting.component';

describe('LevenTokenPostingComponent', () => {
  let component: LevenTokenPostingComponent;
  let fixture: ComponentFixture<LevenTokenPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevenTokenPostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevenTokenPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
