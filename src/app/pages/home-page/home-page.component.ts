import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { PomodoroSettingsService } from 'src/app/services/pomodoro-settings.service';
import { ServiceWorkerService } from 'src/app/services/service-worker.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  _startTimer = 'stop';
  currentTime : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor(
    public pomodoroSettings: PomodoroSettingsService,
    private serviceWorkerService: ServiceWorkerService
  ) { }

  ngOnInit() {
    this.setupTimer();
  }

  startTimer() {
    if(this.pomodoroSettings.getPercentCompleted() < 100) {
      this._startTimer = 'start';
    }
    this.pomodoroSettings.startTimer();
  }

  stopTimer() {
    this._startTimer = 'stop';
    this.pomodoroSettings.stopTimer();
  }

  resetTimer() {
    this._startTimer = 'stop';
    this.pomodoroSettings.resetTimer();
  }

  setupTimer() {
    this.pomodoroSettings.resetTimer();
    this.pomodoroSettings.timeCompletedSeconds.subscribe((val) => {
      this.currentTime.next(this.pomodoroSettings.getSecondsLeft());
    });
  }

  pushNotificationDemoTest() {
    this.serviceWorkerService.subscribeToNotifications();
  }
}
