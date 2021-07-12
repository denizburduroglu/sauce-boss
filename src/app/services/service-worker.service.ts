import { Injectable, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService implements OnInit {

  constructor(
    private swPush: SwPush,
    private swUpdate: SwUpdate
  ) { }
  
  ngOnInit(): void {
       
  }

  checkForUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
          if(confirm("New version available. Load New Version?")) {
              window.location.reload();
          }
      });
    }      
  }
}
