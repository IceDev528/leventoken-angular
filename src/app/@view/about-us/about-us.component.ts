import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/@core/@services/common.service';
import { CustomToastService } from 'src/app/@core/@services/toast.service';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  subscriptions: Subscription[] = [];

  content: any;
  constructor(private cs: CommonService, private router: Router, private profileService: ProfileService,
    private fb: FormBuilder,
    private toastService: CustomToastService) { }

  ngOnInit() {
    if (this.cs.isBrowser()) {
      window.scrollTo(0, 0);
    }
    this.getContent();
  }

  getContent() {
    const request = {
      id: 1,
    };
    const aboutUsSub = this.profileService.getcontent(request).subscribe(
      (res: any) => {
        console.log(res);
        this.content = res;
        (err: HttpErrorResponse) => {
          this.content = res.content;
          if (err.status == 403) {
            this.toastService.showError(err.error.message, 'Error');
            this.router.navigate(['/']);
          }
          if (err.status == 401) {
          }
        }
      })
    this.subscriptions.push(aboutUsSub);
  }
}
