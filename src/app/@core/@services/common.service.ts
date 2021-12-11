import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { BASE_URL } from 'src/app/@core/@utills/constant';
// import { CookieService } from 'ngx-cookie';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CommonService {
	public serverURL = BASE_URL + '/api/';
	noWhitespaceValidator: ValidatorFn;
	constructor(
		@Inject(PLATFORM_ID) private _platformId: Object,
		private router: Router, private cookie: CookieService, private http: HttpClient, public titleService: Title,
	) { }
	getHeader() {
    // let token = this.cookie.get("bearer") || "";
    let token = localStorage.getItem('bearer') || ''

		let headers = new HttpHeaders({
			"Content-Type": "application/json",
			Authorization: token,
		});
		return headers;
	}
	getJsonCookie(name:any) {
		let data = this.cookie.get(name);
		if (data) return JSON.parse(data);
		return null;
	}
	getCookie(name:any) {
		return this.cookie.get(name);
	}
	setCookie(name:any, value:any) {
		if (this.isBrowser()) {
			return this.cookie.set(name, value);
		}
	}
	setStrCookie(name:any, value:any) {
		if (this.isBrowser()) {
			return this.cookie.set(name, JSON.stringify(value));
		}
	}

	setTitle(newTitle: string) {
		this.titleService.setTitle("Potswork : " + newTitle);

	}
	isBrowser() {
		if (isPlatformBrowser(this._platformId)) {
			return true;
		}
		return false;
	}

	navigate(url:any) {
		this.router.navigateByUrl(url);
	}
	getUrl(url:any) {
		return BASE_URL + url;
	}
	httpRequest(req:any, serverURL:any, data?:any) {
		if (req == "get") {
			return this.http.get(this.getUrl(serverURL), {
				headers: this.getHeader(),
			});
		} else if (req == "post") {
			return this.http.post(this.getUrl(serverURL), data, {
				headers: this.getHeader(),
			});
		} else if (req == "put") {
			return this.http.put(this.getUrl(serverURL), data, {
				headers: this.getHeader(),
			});
		} else if (req == "patch") {
			return this.http.patch(this.getUrl(serverURL), data, {
				headers: this.getHeader(),
			});
		} else if (req == "del") {
			let request = {
				body: data,
				headers: this.getHeader(),
			};
			return this.http.delete(this.getUrl(serverURL), request);
		}
  }


  isAutherize(): boolean {
    if (localStorage.getItem('bearer')) {
      return true;
    } else {
      return false;
    }
  }

}
