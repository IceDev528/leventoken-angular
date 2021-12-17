import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
  state:any;
  country:any;
  constructor(private router:Router,private route: ActivatedRoute,private cs:CommonService,private apiService:CustomApiService,private meta: Meta,private titleService: Title,) { }
id:any;
  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      console.log(res.city_name);
        // this.id=res.city_name
        this.city =res.city_name;
        this.state=res.state_name;
        this.country=res.country_name;
        this.setMetaData()
    })
    // this.getContries();
    // this.getCity();
  }

  setMetaData(){
    this.titleService.setTitle(this.city +' Crypto Marketing Manager');
    this.meta.updateTag({ name: 'description', content: "Leven Project is building the world's production blockchain platform for digital assets. Our team has one of the best developers out there, but we can not be complete without great marketing talent. Our passion is to build an open, accessible and fair financial world. We are promoting Leven token, our naive coin that powers our blockchain to the world as we gear up to launch soon." })
  }
  // getContries(){
  //   this.apiService.httpRequest(DYNAMIC_CONTENT_PAGE,'')?.subscribe((res:any)=>{

  //   })
  // }
  // getCity(){
  //   let payload={
  //     _id:this.id
  //   }
  //   this.apiService.httpRequest(GET_CITY,payload)?.subscribe((res:any)=>{
  //     this.city=res.data.data[0].name;
  //   })
  // }
}
