import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime } from 'rxjs/operators';
import { PomodoroSettingsService } from 'src/app/services/pomodoro-settings.service';
import { settingsReducer } from 'src/store/reducers/settings.reducer';
import { AppState } from 'src/store/state';

@Component({
  selector: 'app-settings',
  templateUrl: './settings-page.component.html'
})
export class SettingsPageComponent implements OnInit {

  settingsFormGroup : FormGroup = null;

  constructor(
    private store: Store<AppState>,
    private pomodoroSettingsService: PomodoroSettingsService
  ) { }

  ngOnInit(): void {
    this.setupSettingsForm();
    this.listenToFormChanges();
  }

  listenToFormChanges() {
    this.settingsFormGroup.valueChanges.pipe(debounceTime(250)).subscribe((val) => {
      this.pomodoroSettingsService.setupTimer(val.pomodoroDuration*60);
    })
  }

  setupSettingsForm() {
    this.settingsFormGroup = new FormGroup({
      pomodoroDuration : new FormControl(this.pomodoroSettingsService.timeNeededSeconds.value / 60)
    });
  }

}
