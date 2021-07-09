import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { PomodoroSettingsService } from 'src/app/services/pomodoro-settings.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  _startTimer = 'stop';
  currentTime : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor(
    public pomodoroSettings: PomodoroSettingsService
  ) { }

  ngOnInit() {
    this.setupTimer();
  }

  public startTimer() {
    if(this.pomodoroSettings.getPercentCompleted() < 100) {
      this._startTimer = 'start';
    }
    this.pomodoroSettings.startTimer();
  }

  public stopTimer() {
    this._startTimer = 'stop';
    this.pomodoroSettings.stopTimer();
  }

  public resetTimer() {
    this._startTimer = 'stop';
    this.pomodoroSettings.resetTimer();
  }

  public setupTimer() {
    this.pomodoroSettings.setupTimer(6500);
    this.pomodoroSettings.timeCompletedSeconds.subscribe((val) => {
      this.currentTime.next(this.pomodoroSettings.getSecondsLeft());
    });
  }

}
