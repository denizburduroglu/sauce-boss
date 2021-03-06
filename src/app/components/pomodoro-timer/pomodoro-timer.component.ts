import { animate, AnimationBuilder, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Input, OnChanges, OnInit } from '@angular/core';
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
      }), {params: { endWidth: '100', endHeight: '100'}}),
      state('stop', style({ 
        width: '{{startWidth}}%',
        height: '{{startHeight}}%'
      }), {params: { startWidth: '30', startHeight: '30'}}),
      transition('* => start', animate("{{animateTime}}s linear")),
      transition('* => stop', animate("1ms linear"))
    ]),
    trigger('colorChange', [
      state('start', style({ 
        backgroundColor: '{{endColor}}'
      }), {params: { endColor: 'red'}}),
      state('stop', style({ 
        backgroundColor: '{{startColor}}'
      }), {params: { startColor: 'green'}}),
      transition('* => start', animate("{{animateTime}}s linear")),
      transition('* => stop', animate("1ms linear"))
    ]),
  ]
})
export class PomodoroTimerComponent implements OnInit, OnChanges{

  @Input() startTimer : string = 'stop';
  percentComplete : number = 0;
  animateTime : number = 0;

  constructor(
    public pomodoroSettingsService: PomodoroSettingsService
  ) {}

  ngOnInit() {
    
  }

  ngOnChanges(val) {
    // When state of animation changes setup for new value
    this.setupAnimation();
  }

  setupAnimation() {
    console.log("%c Setting up pomodoro-timer animation", "color: purple");
    this.percentComplete = this.pomodoroSettingsService.getPercentCompleted();
    this.animateTime = this.pomodoroSettingsService.getSecondsLeft();
  }
}
