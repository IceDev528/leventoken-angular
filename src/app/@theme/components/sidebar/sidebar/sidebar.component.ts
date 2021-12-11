import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomApiService } from 'src/app/@core/@services/api.service';
import { CommonService } from 'src/app/@core/@services/common.service';
import { DataUpdateService } from 'src/app/@core/@services/data.service';
import { CustomToastService } from 'src/app/@core/@services/toast.service';
import { IMAGE_URL } from 'src/app/@core/@utills/constant';
import { PROFILE_GET } from '../../../../@core/@utills/api-constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  user: any;
  uploading = false;
  isEmpty: boolean;
  image: File;
  addForm: any;
  editForm: any;
  previewUrl: any;
  requested: boolean;
  imgUrl = IMAGE_URL;
  subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach((element) => {
      element.unsubscribe();
    });
  }
  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }

  constructor(
    private router: Router,
    private update: DataUpdateService,
    private toastService: CustomToastService,
    private apiService: CustomApiService,
    private cs: CommonService
  ) {
    this.getUser();
  }

  ngOnInit() {
    if (this.cs.isBrowser()) { window.scrollTo(0, 0); }
    const updatSub = this.update.updateChangeObservable.subscribe((res) => {
      if (res) {
        this.user = this.apiService.getJSONCookie('user');
        this.update.changeValue(false);
      }
    });
    this.subscriptions.push(updatSub);
    this.getUser();
  }

  getUser() {
    const getUser = this.apiService.httpRequest(PROFILE_GET, {}).subscribe(
      (res) => {
        this.user = res;
        this.apiService.setStrCookie('user', res);
        this.update.changeValue(true);
      },
      (err) => {
        if (err.error) {
          this.toastService.showError(err.error.error_description, 'Error');
        }
      }
    );
    this.subscriptions.push(getUser);
  }

  imageUpload(e:any) {
    this.uploading = true;
    this.isEmpty = true;
    this.image = (e.target.files[0] as File);
    const formData = new FormData();
    formData.append('file', this.image);
    const uploadSub = this.apiService.uploadMedia1(formData).subscribe(
      (events: any) => {
        if (events.type === HttpEventType.Response) {
          this.toastService.showSuccess('Image Uploaded Successfully', 'Uploaded');
          this.uploading = false;
          this.updateInfo(events.body.filename);
        }
      },
      (err) => {
        if (err.status == 401) { return this.apiService.unauthorized(); }
        this.toastService.showError(err.error.error_description, 'Error');
      }
    );
    this.subscriptions.push(uploadSub);
  }

  updateInfo(value:any) { }

  // updateInfo(value) {
  //   this.requested = true;
  //   const upadteSub = this.apiService
  //     .httpRequest(PROFILE_PUT, {
  //       profile_image: value,
  //     })
  //     .subscribe(
  //       (res) => {
  //         this.requested = false;
  //         this.toastService.showSuccess(
  //           'User Profile Image Updated Successfully',
  //           'Image Changed'
  //         );
  //         this.getUser();
  //       },
  //       (err) => {
  //         this.requested = false;
  //         if (err.status == 401) { return this.apiService.unauthorized(); }
  //         this.toastService.showError(err.error.error_description, 'Error');
  //       }
  //     );
  //   this.subscriptions.push(upadteSub);
  // }
}
