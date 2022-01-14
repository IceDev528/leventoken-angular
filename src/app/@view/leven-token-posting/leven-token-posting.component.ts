import { TitleCasePipe } from "@angular/common";
import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { CustomApiService } from "src/app/@core/@services/api.service";
import { CommonService } from "src/app/@core/@services/common.service";
import {
  DYNAMIC_CONTENT_PAGE,
  GET_CITY,
} from "src/app/@core/@utills/api-constant";
import { API_TYPE } from "src/app/@core/@utills/api-type";

@Component({
  selector: "app-leven-token-posting",
  templateUrl: "./leven-token-posting.component.html",
  styleUrls: ["./leven-token-posting.component.scss"],
})
export class LevenTokenPostingComponent implements OnInit {
  city: any;
  state: any;
  country: any;
  serviceName = "";
  datePosted: Date;
  dateValidTill: Date;
  zipCodeInput: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cs: CommonService,
    private apiService: CustomApiService,
    private meta: Meta,
    private titleService: Title
  ) {
    let date = new Date();
    this.datePosted = new Date();
    this.dateValidTill = new Date(date.setMonth(date.getMonth() + 3));
  }
  id: any;
  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      console.log(res.city_name);
      // this.id=res.city_name
      this.city = res.city_name;
      this.state = res.state_name;
      this.country = res.country_name;
      this.setMetaData();
    });
    this.route.queryParamMap.subscribe((res) => {
      this.zipCodeInput = res.get("zipcode") || "33411";
      this.addScript();
    });
    // this.getContries();
    // this.getCity();
  }

  setMetaData() {
    this.titleService.setTitle(this.city + " Crypto Marketing Manager");
    this.meta.updateTag({
      name: "description",
      content:
        "Leven Project is building the world's production blockchain platform for digital assets. Our team has one of the best developers out there, but we can not be complete without great marketing talent. Our passion is to build an open, accessible and fair financial world. We are promoting Leven token, our naive coin that powers our blockchain to the world as we gear up to launch soon.",
    });
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

  addScript() {
    const script3 = document.createElement("script");
    script3.type = `application/ld+json`;
    script3.text = `{
								"@context": "http://schema.org",
								"@type": "Corporation",
								"name": "levetoken",
								"alternateName": "levetoken Help",
								"legalName": "levetoken project",
								"url": "https://leventoken.com/",
								"logo": "https://leventoken.com/assets/images/leven_logo.png",
								"contactPoint": [{
									"@type": "ContactPoint",
									"contactType": "customer service",
									"contactOption": "TollFree",
									"availableLanguage": "English"
								}],
								"sameAs": [
									"https://twitter.com/ProjectLeven"
								]
							}`;
    script3.async = true;
    document.body.appendChild(script3);
    const script1 = document.createElement("script");
    script1.type = `application/ld+json`;
    script1.text = `{
								"@context": "http://schema.org",
								"@type": "Organization",
								"name": "leventoken",
								"url": "https://leventoken.com/",
								"logo": "https://leventoken.com/assets/images/leven_logo.png",
								"contactPoint": [{
									"@type": "contactPoint",
									"contactType": "customer service"
								}],
								"sameAs": [
									"https://twitter.com/ProjectLeven"
								]
							}`;
    script1.async = true;
    document.body.appendChild(script1);

    this.jobPost();
  }
  jobPost() {
    let description: string = "";
    let title: string = "";
    description = `Leven Project is building the world's production blockchain platform for digital assets. Our team has one of the best developers out there, but we can not be complete without great marketing talent. Our passion is to build an open, accessible and fair financial world. We are promoting Leven token, our naive coin that powers our blockchain to the world as we gear up to launch soon.`;
    title = `${this.city} Crypto Marketing Manager`;
    const script2 = document.createElement("script");
    script2.type = `application/ld+json`;
    script2.text = `{
								"@context": "http://schema.org/",
								"@type": "JobPosting",
								"title": "${title}",
								"description": "${description}",
								"identifier": {
									"@type": "PropertyValue",
									"name": "leventoken LLC"
								},
								"datePosted": "${this.datePosted.toISOString()}",
								"validThrough": "${this.dateValidTill.toISOString()}",
								"employmentType": ["PART_TIME"],
								"hiringOrganization": {
									"@type": "Organization",
									"name": "leventoken",
									"sameAs": "https://leventoken.com/",
									"logo": "https://leventoken.com/assets/images/leven_logo.png"
								},
								"jobLocation": {
									"@type": "Place",
									"address": {
										"@type": "PostalAddress",
										"streetAddress": "${this.city}, ${this.state}",
										"addressLocality": "${this.city}",
										"addressRegion": "${this.state}",
										"postalCode": "${this.zipCodeInput || ""}",
										"addressCountry": "United States"
									}
								},
								"baseSalary": {
									"@type": "MonetaryAmount",
									"currency": "USD",
									"value": {
										"@type": "QuantitativeValue",
										"value": 30.00,
										"unitText": "HOUR"
									}
								}
							}`;
    script2.async = true;
    document.body.appendChild(script2);
  }
}
