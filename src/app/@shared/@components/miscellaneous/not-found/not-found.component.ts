import { Component } from '@angular/core';
import { CommonService } from 'src/app/@core/@services/common.service';
import { CustomToastService } from 'src/app/@core/@services/toast.service';

@Component({
  selector: 'app-not-found',
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  constructor(private cs: CommonService, private toastService: CustomToastService, ) {}

  goToHome() {
    this.cs.navigate('/');
  }
}
