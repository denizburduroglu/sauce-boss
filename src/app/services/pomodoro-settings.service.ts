import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PomodoroSettingsService {
  
  pomodoroLengthMin : number = 3000;

  constructor() { }
}
