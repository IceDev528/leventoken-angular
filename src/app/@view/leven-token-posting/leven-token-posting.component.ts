import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomApiService } from 'src/app/@core/@services/api.service';
import { CommonService } from 'src/app/@core/@services/common.service';
import { DYNAMIC_CONTENT_PAGE, GET_CITY } from 'src/app/@core/@utills/api-constant';
import { API_TYPE } from 'src/app/@core/@utills/api-type';

@Component({
  selector: 'app-leven-token-posting',
  templateUrl: './leven-token-posting.component.html',
  styleUrls: ['./leven-token-posting.component.scss']
})
export class LevenTokenPostingComponent implements OnInit {
  city:any;
  constructor(private router:Router,private route: ActivatedRoute,private cs:CommonService,private apiService:CustomApiService) { }
id:any;
  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      console.log(res.cityId);
        this.id=res.cityId
    })
    this.getContries();
    this.getCity();
  }
  getContries(){
    this.apiService.httpRequest(DYNAMIC_CONTENT_PAGE,'')?.subscribe((res:any)=>{

    })
  }
  getCity(){
    let payload={
      _id:this.id
    }
    this.apiService.httpRequest(GET_CITY,payload)?.subscribe((res:any)=>{
      this.city=res.data.data[0].name;
    })
  }
}
