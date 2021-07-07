import { animate, AnimationBuilder, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Observable, TimeInterval, timer } from 'rxjs';
import { debounceTime, timeInterval } from 'rxjs/operators';
import { PomodoroSettingsService } from 'src/app/services/pomodoro-settings.service';
import { PomodoroTimer } from 'src/models/timer';

@Component({
  selector: 'app-pomodoro-timer',
  templateUrl: './pomodoro-timer.component.html',
  animations: [
    trigger('enlarge', [
      state('start', style({ 
        width: '{{endWidth}}%',
        height: '{{endHeight}}%'
      }), {params: { endWidth: '30', endHeight: '30'}}),
      transition('* => start', animate("{{animateTime}} linear")),
      transition('* => stop', animate("10ms linear"))
    ]),
    trigger('colorChange', [
      state('start', style({ 
        backgroundColor: '{{endColor}}'
      }), {params: { endColor: 'red'}}),
      transition('* => start', animate("{{animateTime}} linear")),
      transition('* => stop', animate("10ms linear"))
    ]),
  ]
})
export class PomodoroTimerComponent implements OnInit {

  _startTimer : string = '';
  timeCompletedSeconds : number = 0;
  timeToEnlarge: number = 0;
  interval = null;

  constructor(
    private pomodoroSettingsService : PomodoroSettingsService
  ) {}

  ngOnInit(): void {
    this.setupEnlargeAnimation();
  }

  setupEnlargeAnimation() {
    this.timeToEnlarge = this.pomodoroSettingsService.pomodoroLengthMin;
  }
  startTimer() {
    if(this.timeCompletedSeconds*1000 < this.timeToEnlarge) {
      this.interval = setInterval(() => {
        this.timeCompletedSeconds++;
      }, 1000);
      this._startTimer = 'start';
    } else {
      this.resetTimer();
    }
  }

  stopTimer() {
    clearInterval(this.interval);
    this._startTimer = 'stop';
  }

  resetTimer() {
    this._startTimer = '';
    this.timeCompletedSeconds = 0;
    clearInterval(this.interval);
  }

  getPercentCompleted() {
    return ((this.timeCompletedSeconds * 1000)/this.timeToEnlarge)*70;
  }
}
