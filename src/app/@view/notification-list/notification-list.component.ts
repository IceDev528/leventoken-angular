import { Component, OnInit } from '@angular/core';
import { CustomApiService } from 'src/app/@core/@services/api.service';
import { CustomToastService } from 'src/app/@core/@services/toast.service';
import { Subscription } from 'rxjs';
import { FETCH_CHAT_GET, NOTIFICATION_LIST } from 'src/app/@core/@utills/api-constant';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
  result=[];
  subscriptions: Subscription[] = [];
 
  constructor( private apiService: CustomApiService, private toastService: CustomToastService,
    ) {
      this.getNotification()
      }

  ngOnInit(): void {
    this.getNotification()
  }
  getNotification() {
    const fetchNotification = this.apiService.httpRequest(NOTIFICATION_LIST, {}).subscribe(
      (res) => {
        this.result = res;
        console.log(this.result)
      },
      (err) => {
        if (err.error) {
          this.toastService.showError(err.error.error_description, 'Error');
        }
      }
    );
    this.subscriptions.push(fetchNotification);
  }
}
