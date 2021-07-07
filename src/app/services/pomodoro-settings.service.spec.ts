import { TestBed } from '@angular/core/testing';

import { PomodoroSettingsService } from './pomodoro-settings.service';

describe('PomodoroSettingsService', () => {
  let service: PomodoroSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PomodoroSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
