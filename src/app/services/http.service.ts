import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient : HttpClient
  ) { }

  httpGet() {
    // this.httpClient.get();
  }

  httpPost(url : string, body : object) : Observable<any> {
    return this.httpClient.post(url, body);
  }
}
