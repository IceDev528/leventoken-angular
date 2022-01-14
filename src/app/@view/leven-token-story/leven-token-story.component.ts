import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-leven-token-story",
  templateUrl: "./leven-token-story.component.html",
  styleUrls: ["./leven-token-story.component.scss"],
})
export class LevenTokenStoryComponent implements OnInit {
  crypto_name: any;
  constructor(
    private meta: Meta,
    private titleService: Title,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.crypto_name = res.crypto_name;
      this.setMetaData();
      this.addScript();
    });
  }
  setMetaData() {
    this.titleService.setTitle(
      "Where to buy Leven token (LEVEN) a similar crypto token like " +
        this.crypto_name
    );
    this.meta.updateTag({
      name: "description",
      content:
        "Let us discuss today the latest in the crypto landscape and where you can get Leven tokens and similar cryptocurrencies with great upside exponential. How to buy Leven token (LEVEN) a similar crypto token like " +
        this.crypto_name,
    });
    this.meta.updateTag({
      name: "image",
      content: 'https://leventoken.blob.core.windows.net/uploads/original/unnamed_1640167587845.png',
    });
    this.meta.updateTag({
      property: "og:image",
      content: 'https://leventoken.blob.core.windows.net/uploads/original/unnamed_1640167587845.png',
    });
  }
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

	}
}
