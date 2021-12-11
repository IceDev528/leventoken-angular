import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class FakeService {
  constructor(private http: HttpClient) { }

  getEventDetail(): Observable<any> {
    return this.http.get<any>('assets/data/get/event-detail.json');
  }
  getAttractionTicket(): Observable<any> {
    return this.http.get<any>('assets/data/get/attr-ticket.json');
  }
  getEventList(): Observable<any> {
    return this.http.get<any>('assets/data/get/event-list.json');
  }
  putEventDetail() {
    return this.http.get<any>('assets/data/put/event-put.json');
  }
  postEventDetail() {
    return this.http.get<any>('assets/data/post/event-post.json');
  }
}
