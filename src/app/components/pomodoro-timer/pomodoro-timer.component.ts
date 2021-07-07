import { animate, AnimationBuilder, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Observable, timer } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
      }), {params: { endWidth: '0', endHeight: '0'}}),
      state('reset', style({
        width: '{{startWidth}}%',
        height: '{{startHeight}}%'
      }), {params: { startWidth: '0', startHeight: '0'}}),
      transition('* => start', animate("{{animateTime}} linear")),
      transition('* => reset', animate("{{animateTime}} linear"))
    ]),
    trigger('colorChange', [
      state('start', style({ 
        backgroundColor: '{{endColor}}'
      }), {params: { endColor: 'red'}}),
      state('reset', style({
        backgroundColor: '{{startColor}}'
      }), {params: { startColor: 'green'}}),
      transition('* => start', animate("{{animateTime}} linear")),
      transition('* => reset', animate("10ms linear"))
    ]),
  ]
})
export class PomodoroTimerComponent implements OnInit {

  _startTimer : string = '';
  currentTimer : PomodoroTimer = new PomodoroTimer(250, 250, 0);
  timeToEnlarge: number = 0;

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
    this._startTimer = 'start';
  }

  stopTimer() {
    this.currentTimer
    this._startTimer = '';
  }

  resetTimer() {
    this._startTimer = 'reset';
  }

  currentTime() {

  }
}
