import { Injectable, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService implements OnInit {

  publicVapidKey:string=`BPFJMQ-YaJTkX99MBgc9tW9ov06LQ1-KcBzeR_5kkYPKZ-XY1Syy_7AT8awnL8GECYdslzfylMF2lUJpk-jHq50`;

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
        this.httpService.httpPost('https://denizb-push-notification.herokuapp.com/notification', { notification : sub }).subscribe(
          (val) => {
            console.log("Value: ", val);
          }, (err) => {
            console.error(err);
          });
      }).catch(console.error);
    }
  }
}
