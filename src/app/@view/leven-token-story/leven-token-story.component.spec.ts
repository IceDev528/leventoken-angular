import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevenTokenStoryComponent } from './leven-token-story.component';

describe('LevenTokenStoryComponent', () => {
  let component: LevenTokenStoryComponent;
  let fixture: ComponentFixture<LevenTokenStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevenTokenStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevenTokenStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
