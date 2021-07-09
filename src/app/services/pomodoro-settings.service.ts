import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PomodoroSettingsService {
  
  timeCompletedSeconds: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  timeNeededSeconds: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  interval = null;
  constructor() {}

  public startTimer() {
    if(this.timeCompletedSeconds.value < this.timeNeededSeconds.value) {
      // In progress
      this.interval = setInterval(() => {
        this.timeCompletedSeconds.next(this.timeCompletedSeconds.value + 1);
      }, 1000);
    } else {
      this.resetTimer();
    }
  }

  public stopTimer() {
    if(this.timeCompletedSeconds.value < this.timeNeededSeconds.value) {
      // In progress
      clearInterval(this.interval);
    } else {
      this.resetTimer();
    }
  }

  public resetTimer() {
    this.timeCompletedSeconds.next(0);
    clearInterval(this.interval);
  }

  public setupTimer(timeSeconds: number) {
    this.timeNeededSeconds.next(timeSeconds);
  }

  public getPercentCompleted() : number {
    return ((this.timeCompletedSeconds.value)/this.timeNeededSeconds.value)*100;
  }

  public getSecondsLeft() : number {
    return this.timeNeededSeconds.value - this.timeCompletedSeconds.value
  }
}
