import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { CustomApiService } from "src/app/@core/@services/api.service";
import { CustomToastService } from "src/app/@core/@services/toast.service";
import {
  GET_TOTAL_REFFERALS,
  PROFILE_GET,
  SHARE_REFREL_BY_EMAIL,
} from "src/app/@core/@utills/api-constant";
import { IMAGE_URL } from "src/app/@core/@utills/constant";

@Component({
  selector: "app-refer-coin",
  templateUrl: "./refer-coin.component.html",
  styleUrls: ["./refer-coin.component.scss"],
})
export class ReferCoinComponent implements OnInit, OnDestroy {
  @ViewChild('emailInput', { static: false }) searchUserInput:any;

  subscriptions: Subscription[] = [];
  user: any = "";
  referals:any;
  imgUrl=IMAGE_URL
  selectedUserData:any=[];
  userData:any=[];
  id=1;
  showError:boolean=false;
  notValidEmail:boolean=false;
  email:any='';
  totalCoins:any;
  total_tokens:any;
  emailPattern=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  constructor(
    private apiService: CustomApiService,
    private toastService: CustomToastService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getProfile();
    this.GetTotalReferal();
  }
  getProfile() {
    let getProfile = this.apiService.httpRequest(PROFILE_GET, "").subscribe(
      (res: any) => {
        this.user = res.data;
      },
      (err: any) => {
        if (err.status == 403) {
          this.toastService.showError(err.error.error_description, "Error");
          localStorage.clear();
          this.router.navigate([""]);
        } else if (err.status == 401) {
          localStorage.clear();
          this.toastService.showError(err.error.error_description, "Error");
          this.router.navigate(["/login"]);
          //  this.update.changeLoginPopup(true);
        } else {
          this.toastService.showError(err.error.error_description, "Error");
        }
      }
    );
    this.subscriptions.push(getProfile);
  }
  GetTotalReferal() {
    let totalRef = this.apiService
      .httpRequest(GET_TOTAL_REFFERALS, 1)
      .subscribe((res: any) => {
        console.log(res);
        this.referals=res.data.data
        this.totalCoins=res.data.total_coins
        this.total_tokens=res.data.total_tokens
      });
    this.subscriptions.push(totalRef);
  }
  copy(val: string) {
    navigator.clipboard.writeText(val);
    this.toastService.showSuccess("Copied to clipboard.", "");
  }
  ngOnDestroy() {
    this.subscriptions.forEach((element) => {
      element.unsubscribe();
    });
  }
  removeUser(userObj:any){
    this.userData.push({ id: userObj.id, email: userObj.email });
    this.removeByAttr(this.selectedUserData, 'id', userObj.id);
    // this.to_ids = <any>this.selectedUserData.map(({ email }) => email);
  }
  selectEvent() {
    debugger
    if(!this.searchUserInput.nativeElement.value){
      this.showError=true;
      return
    }

    if( !this.searchUserInput.nativeElement.value.toLowerCase().match(this.emailPattern)){
      this.showError=true;
      this.notValidEmail=true;
      return
    }else{
      this.notValidEmail=false;
    }
    this.showError=false;
    console.log();
    this.id++
    let item:any={
      email:this.searchUserInput.nativeElement.value,
      id:this.id
    }
    this.selectedUserData.push({ id: item.id, email: item.email });
    // this.to_ids = <any>this.selectedUserData.map(({ email }:any) => email);
    // this.removeUserFromUserData(item.id);
    // this.searchUserInput.clear();
    this.searchUserInput.nativeElement.value='';
    this.email=''
    console.log(this.selectedUserData);
  }

  // removeUserFromUserData(id:any) {
  //   let ab = this.userData.filter((obj:any) => obj.id === id);
  //   this.removeByAttr(this.userData, 'id', ab[0].id);
  // }
  removeByAttr(arr:any, attr:any, value:any) {
    var i = arr.length;
    while (i--) {
      if (arr[i]
        && arr[i].hasOwnProperty(attr)
        && (arguments.length > 2 && arr[i][attr] === value)) {
        arr.splice(i, 1);
      }
    }
    return arr;
  }
  shareEmail(){
    let emails=this.selectedUserData.map((item:any)=>item.email)
   let payload={
      emails:emails
    }
    this.apiService.httpRequest(SHARE_REFREL_BY_EMAIL,payload).subscribe((res:any)=>{
      console.log(res);
      this.toastService.showSuccess(res.data.message,'success');
      this.selectedUserData=[];

    })
  }

  getShortName(Username:string){
      let name =Username.split(' ')
      let fChar=name[0][0];
      let lChar='';
      if(name[1]){
        lChar=name[1][0]
      }
      let userNameShort= fChar + lChar;
      userNameShort= userNameShort.toUpperCase();
      return userNameShort
  }
}
