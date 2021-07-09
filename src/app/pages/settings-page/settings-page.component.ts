import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { settingsReducer } from 'src/store/reducers/settings.reducer';
import { AppState } from 'src/store/state';

@Component({
  selector: 'app-settings',
  templateUrl: './settings-page.component.html'
})
export class SettingsPageComponent implements OnInit {

  settingsFormGroup : FormGroup = null;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.createForms();
  }

  createForms() {
    this.settingsFormGroup = new FormGroup({
      pomodoroDuration : new FormControl('')
    });
    this.settingsFormGroup.valueChanges.subscribe((val) => {
      console.log("Value changes: ", val);
    })
  }

}
