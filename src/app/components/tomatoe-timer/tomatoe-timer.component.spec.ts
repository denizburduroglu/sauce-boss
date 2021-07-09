import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomatoeTimerComponent } from './tomatoe-timer.component';

describe('TomatoeTimerComponent', () => {
  let component: TomatoeTimerComponent;
  let fixture: ComponentFixture<TomatoeTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomatoeTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomatoeTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
