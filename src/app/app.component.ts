import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceWorkerService } from './services/service-worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'sauce-boss';

  constructor(
    private serviceWorkerService: ServiceWorkerService
  ) {

  }

  ngOnInit() {
    this.serviceWorkerService.checkForUpdates();
    console.log("some update");
  }
}
