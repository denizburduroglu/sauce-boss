import { Injectable, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService implements OnInit {

  vapidKeys:string=`BEIWN2i8Nmy5TtmwvHR17T6DkeZseog-
  djS92NYRkEcaYFUDSytJAwudB6S9DBGQH4nZVbLJpEWIz_zvBLDmnN8`;

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

  triggerMessage() {

  }

  subscribeToNotifications() {
    if (this.swPush.isEnabled) {
      console.log("%c Subscribing to notifications", "color:magenta");
      this.swPush.notificationClicks.subscribe((val) => {
        console.log("Notification clicks", val);
      });
      this.swPush.requestSubscription({
        serverPublicKey: this.vapidKeys
      }).then(sub => {
        console.log(sub);
      }).catch(console.log);
    }
  }
}
