import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { settingsReducer } from 'src/store/reducers/settings.reducer';
import { AppState } from 'src/store/state';

@Component({
  selector: 'app-settings',
  templateUrl: './settings-page.component.html'
})
export class SettingsPageComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // this.store.dispatch();
  }

}
