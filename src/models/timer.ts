export interface Timer {
    msTime: number;
    start: boolean;
}
export class PomodoroTimer {
    currentWidth: number;
    currentHeight: number;
    currentTime: number;
    constructor(currentWidth, currentHeight, currentTime) {
        this.currentTime = currentTime;
        this.currentHeight = currentHeight;
        this.currentWidth = currentWidth;
    }
  }