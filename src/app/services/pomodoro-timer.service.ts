import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Timer } from 'src/models/timer';

@Injectable({
  providedIn: 'root'
})

export class PomodoroTimerService {

  timerSettings : BehaviorSubject<Timer> = new BehaviorSubject<Timer>(null);
  currentTimer : number = 0;
  constructor() { }

  createTimer(time: Timer) {
    this.timerSettings.next(time);
  }

  startTimer() {
    this.timer.value.
  }

  pauseTimer() {

  }

  resetTimer() {

  }

  
}
