import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { StoreModule } from '@ngrx/store';
import { settingsReducer } from 'src/store/reducers/settings.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './layouts/header/header/header.component';
import { PomodoroTimerComponent } from './components/pomodoro-timer/pomodoro-timer.component';
import { PomodoroSettingsService } from './services/pomodoro-settings.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TomatoeTimerComponent } from './components/tomatoe-timer/tomatoe-timer.component';
import { TimestampPipe } from './components/pipes/timestamp.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ServiceWorkerService } from './services/service-worker.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    SettingsPageComponent,
    HeaderComponent,
    PomodoroTimerComponent,
    TomatoeTimerComponent,
    TimestampPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ settings: settingsReducer}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    PomodoroSettingsService,
    ServiceWorkerService,
    TimestampPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
