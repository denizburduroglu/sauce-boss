import { Injectable, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService implements OnInit {

  publicVapidKey:string=`BLnrCrwIadzbL9KY222ex8dusgsMgL6xKQC7QeT2o2thWek-
  P051r5szlCwzitnuCtjrM_-r1IY2CuFQzKWK0ow`;

  pushNotificationObject : BehaviorSubject<PushSubscription> = new BehaviorSubject<PushSubscription>(null);
  constructor(
    private swPush: SwPush,
    private swUpdate: SwUpdate,
    private httpService: HttpService
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
        serverPublicKey: this.publicVapidKey
      }).then(sub => {
        // Our subscription object: sub
        console.log(sub);
        this.pushNotificationObject.next(sub);
        this.httpService.httpPost(window.location.origin, { notification : sub }).subscribe(
          (val) => {
            console.log("Value: ", val);
          }, (err) => {
            console.error(err);
          });
      }).catch(console.error);
    }
  }
}
