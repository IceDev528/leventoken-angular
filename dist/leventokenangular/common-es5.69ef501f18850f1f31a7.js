!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkleventokenangular=self.webpackChunkleventokenangular||[]).push([[592],{4897:function(e,i,r){r.d(i,{_:function(){return s},g:function(){return c}});var a,o=r(7716),u=r(8583),s=((a=function(){function e(n,i){t(this,e),this.el=n,this.platformId=i,this.ng2TelInputOptions={},this.hasError=new o.vpe,this.ng2TelOutput=new o.vpe,this.countryChange=new o.vpe,this.intlTelInputObject=new o.vpe}return n(e,[{key:"ngOnInit",value:function(){var t=this;(0,u.NF)(this.platformId)&&(this.ng2TelInputOptions=Object.assign({},this.ng2TelInputOptions,{utilsScript:this.getUtilsScript(this.ng2TelInputOptions)}),this.ngTelInput=window.intlTelInput(this.el.nativeElement,Object.assign({},this.ng2TelInputOptions)),this.el.nativeElement.addEventListener("countrychange",function(){t.countryChange.emit(t.ngTelInput.getSelectedCountryData())}),this.intlTelInputObject.emit(this.ngTelInput))}},{key:"onBlur",value:function(){var t=this.isInputValid();if(t){var e=this.ngTelInput.getNumber();this.hasError.emit(t),this.ng2TelOutput.emit(e)}else this.hasError.emit(t)}},{key:"isInputValid",value:function(){return this.ngTelInput.isValidNumber()}},{key:"setCountry",value:function(t){this.ngTelInput.setCountry(t)}},{key:"getUtilsScript",value:function(t){return t.utilsScript||"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.1/js/utils.js"}}]),e}()).\u0275fac=function(t){return new(t||a)(o.Y36(o.SBq),o.Y36(o.Lbi))},a.\u0275dir=o.lG2({type:a,selectors:[["","ng2TelInput",""]],hostBindings:function(t,e){1&t&&o.NdJ("blur",function(){return e.onBlur()})},inputs:{ng2TelInputOptions:"ng2TelInputOptions"},outputs:{hasError:"hasError",ng2TelOutput:"ng2TelOutput",countryChange:"countryChange",intlTelInputObject:"intlTelInputObject"}}),a),c=function(){var e=function(){function e(){t(this,e)}return n(e,null,[{key:"forRoot",value:function(){return{ngModule:e,providers:[]}}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({}),e}()},1452:function(e,i,r){r.d(i,{a:function(){return l}});var a,o=r(7716),u=r(2388),s=r(4330),c=r(1984),l=((a=function(){function e(n,i,r){t(this,e),this.cs=n,this.router=i,this.toastService=r}return n(e,[{key:"canActivate",value:function(t,e){return this.checkAuth()}},{key:"canActivateChild",value:function(t,e){return this.checkAuth()}},{key:"checkAuth",value:function(){return!!this.cs.isAutherize()||(this.router.navigate(["/login"]),this.toastService.showError("","Please log in first"),!1)}}]),e}()).\u0275fac=function(t){return new(t||a)(o.LFG(u.v),o.LFG(s.F0),o.LFG(c.Z))},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a)},3825:function(e,i,r){r.d(i,{D:function(){return c}});var a,o=r(7709),u=r(6215),s=r(7716),c=((a=function(){function e(){t(this,e),this.updateDetails=new o.xQ,this.loginSubject=new u.X(!1),this.loginSubjectObservable=this.loginSubject.asObservable(),this.forbiddenSubject=new u.X(!1),this.forbiddenSubjectObservable=this.forbiddenSubject.asObservable(),this.updateProfileData=new u.X(!1),this.updateProfileDataObservable=this.updateProfileData.asObservable()}return n(e,[{key:"changeLogin",value:function(t){this.loginSubject.next(t)}},{key:"changeForbidden",value:function(t){this.forbiddenSubject.next(t)}},{key:"changeProfileData",value:function(t){this.updateProfileData.next(t)}}]),e}()).\u0275fac=function(t){return new(t||a)},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a)},6569:function(e,i,r){r.d(i,{N:function(){return u}});var a,o=r(7716),u=((a=function(){function e(n){t(this,e),this._el=n}return n(e,[{key:"onInputChange",value:function(t){var e=this._el.nativeElement.value;this._el.nativeElement.value=""==e.trim()?"":parseInt(e)?parseInt(e).toString():""}}]),e}()).\u0275fac=function(t){return new(t||a)(o.Y36(o.SBq))},a.\u0275dir=o.lG2({type:a,selectors:[["","appNumber",""]],hostBindings:function(t,e){1&t&&o.NdJ("input",function(t){return e.onInputChange(t)})}}),a)},2302:function(e,i,r){r.d(i,{Q:function(){return s}});var a,o=r(8583),u=r(7716),s=((a=n(function e(){t(this,e)})).\u0275fac=function(t){return new(t||a)},a.\u0275mod=u.oAB({type:a}),a.\u0275inj=u.cJS({imports:[[o.ez]]}),a)},5841:function(e,i,r){r.d(i,{_:function(){return c}});var a,o=r(8583),u=r(4330),s=r(7716),c=((a=n(function e(){t(this,e)})).\u0275fac=function(t){return new(t||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[[o.ez,u.Bz]]}),a)},7842:function(e,i,r){r.d(i,{G:function(){return O}});var a=r(4799),o=r(7716),u=r(2388),s=r(2528),c=r(8969),l=r(5665),g=r(4098),p=r(2111),f=r(4330),h=r(1984),v=r(3825),d=r(8583),b=function(){return["/signup"]};function m(t,e){1&t&&(o.ynx(0),o.TgZ(1,"a",20),o.TgZ(2,"button",21),o._uU(3," SIGN UP/LOGIN "),o.qZA(),o.qZA(),o.BQk()),2&t&&(o.xp6(1),o.Q6J("routerLink",o.DdM(1,b)))}function k(t,e){if(1&t&&(o.ynx(0),o.TgZ(1,"a",22),o._UZ(2,"img",23),o.qZA(),o.BQk()),2&t){var n=o.oxw(2);o.xp6(2),o.Q6J("src",n.imgUrl+n.user.profile_pic,o.LSH)}}function y(t,e){if(1&t&&(o.ynx(0),o.TgZ(1,"a",24),o.TgZ(2,"span",25),o._uU(3),o.qZA(),o.qZA(),o.BQk()),2&t){var n=o.oxw(2);o.xp6(3),o.Oqu(n.userNameShort)}}function S(t,e){if(1&t&&(o.ynx(0),o.YNc(1,k,3,1,"ng-container",19),o.YNc(2,y,4,1,"ng-container",19),o.BQk()),2&t){var n=o.oxw();o.xp6(1),o.Q6J("ngIf",null==n.user?null:n.user.profile_pic),o.xp6(1),o.Q6J("ngIf",!(null!=n.user&&n.user.profile_pic))}}var I,O=((I=function(){function e(n,i,r,o,u,s,c,l,g,p){t(this,e),this.cs=n,this.updatedata=i,this.modalService=r,this.authService=o,this.apiService=u,this.profileService=s,this.router=c,this.toastService=l,this.update=g,this.dataService=p,this.changeHeader=0,this.loggedIn=!1,this.subscriptions=[],this.mediaUrl=a.eR,this.imgUrl=a.yA}return n(e,[{key:"ngOnInit",value:function(){var t=this;this.updated=this.updatedata.updateDetails;var e=localStorage.getItem("bearer");e?(this.getUserInfo(),this.loggedIn=!0):this.loggedIn=!1,this.updatedata.updateChangeObservable.subscribe(function(n){n&&(t.loggedIn=!!e,t.getUserInfo(),t.updatedata.changeValue(!1))})}},{key:"ngAfterViewInit",value:function(){var t=this;this.dataService.loginSubjectObservable.subscribe(function(e){if(e){t.loggedIn=!!localStorage.getItem("bearer");var n=localStorage.getItem("user");n&&(t.user=JSON.parse(n))}}),this.dataService.updateProfileDataObservable.subscribe(function(e){if(e){var n=localStorage.getItem("user");n&&(t.user=JSON.parse(n))}}),this.updatedata.changeLoginObservable.subscribe(function(e){if(e){t.loggedIn=!!localStorage.getItem("bearer");var n=localStorage.getItem("user");n&&(t.user=JSON.parse(n))}})}},{key:"getUserInfo",value:function(){var t=this,e=this.profileService.getProfile({}).subscribe(function(e){if(e){if(t.user=e.data,!t.user.profile_pic){var n=e.data.name.split(" "),i="";n[1]&&(i=n[1][0]),t.userNameShort=n[0][0]+i,t.userNameShort=t.userNameShort.toUpperCase()}t.cs.setStrCookie("user",t.user),localStorage.setItem("user",JSON.stringify(t.user))}},function(e){403==e.status&&t.router.navigate(["/"]),401==e.status&&(localStorage.clear(),t.toastService.showError(e.error.error_description,"Error"),t.router.navigate(["/login"]))});this.subscriptions.push(e)}},{key:"checkUser",value:function(){this.loggedIn=!!this.user}},{key:"navigate",value:function(t){this.modalService.dismissAll(),this.cs.navigate(t)}},{key:"logOut",value:function(){this.apiService.logout(),this.loggedIn=!1}},{key:"about",value:function(){var t=this;this.router.navigate(["/home"]),setTimeout(function(){t.update.about.next(!0)},100)}},{key:"audit",value:function(){var t=this;this.router.navigate(["/home"]),setTimeout(function(){t.update.audit.next(!0)},100)}},{key:"presale",value:function(){var t=this;this.router.navigate(["/home"]),setTimeout(function(){t.update.presale.next(!0)},100)}},{key:"contact",value:function(){var t=this;this.router.navigate(["/home"]),setTimeout(function(){t.update.contact.next(!0)},100)}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(t){t&&t.unsubscribe()})}}]),e}()).\u0275fac=function(t){return new(t||I)(o.Y36(u.v),o.Y36(s._),o.Y36(c.FF),o.Y36(l.L),o.Y36(g.C),o.Y36(p.H),o.Y36(f.F0),o.Y36(h.Z),o.Y36(s._),o.Y36(v.D))},I.\u0275cmp=o.Xpm({type:I,selectors:[["shared-header"]],decls:31,vars:2,consts:[[1,"leven-header"],[1,"navbar","navbar-expand-lg","navbar-light","he","pt-3","pb-3"],[1,"container"],["href","#",1,"navbar-brand","img-brand"],["src","../../assets/images/leven_logo.png","alt","leven-logo"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse","leaves-ul"],[1,"navbar-nav","ms-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","href","#",1,"nav-link","active"],[1,"nav-link","active",3,"click"],["href","https://levenproject.org/","target","_blank",1,"nav-link","active"],["aria-current","page",1,"nav-link","active",3,"click"],[1,"social-icon"],["href","https://t.me/leventoken","target","_blank"],["src","../../assets/images/skype.png","alt","skype",1,"px-2"],["href","https://twitter.com/ProjectLeven","target","_blank"],["src","../../assets/images/twitter.png","alt","twitter",1,"px-2","me-3"],[4,"ngIf"],[3,"routerLink"],["type","submit",1,"btn","common-btn"],["routerLink","/profile",1,"profile-img"],[3,"src"],["routerLink","/profile",1,"text-dark"],[1,"name-profile"]],template:function(t,e){1&t&&(o.TgZ(0,"header",0),o.TgZ(1,"nav",1),o.TgZ(2,"div",2),o.TgZ(3,"a",3),o._UZ(4,"img",4),o.qZA(),o.TgZ(5,"button",5),o._UZ(6,"span",6),o.qZA(),o.TgZ(7,"div",7),o.TgZ(8,"ul",8),o.TgZ(9,"li",9),o.TgZ(10,"a",10),o._uU(11,"Home"),o.qZA(),o.qZA(),o.TgZ(12,"li",9),o.TgZ(13,"a",11),o.NdJ("click",function(){return e.about()}),o._uU(14,"About"),o.qZA(),o.qZA(),o.TgZ(15,"li",9),o.TgZ(16,"a",11),o.NdJ("click",function(){return e.audit()}),o._uU(17,"Audit"),o.qZA(),o.qZA(),o.TgZ(18,"li",9),o.TgZ(19,"a",12),o._uU(20,"Presale"),o.qZA(),o.qZA(),o.TgZ(21,"li",9),o.TgZ(22,"a",13),o.NdJ("click",function(){return e.contact()}),o._uU(23,"Contact"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(24,"div",14),o.TgZ(25,"a",15),o._UZ(26,"img",16),o.qZA(),o.TgZ(27,"a",17),o._UZ(28,"img",18),o.qZA(),o.YNc(29,m,4,2,"ng-container",19),o.YNc(30,S,3,2,"ng-container",19),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(29),o.Q6J("ngIf",!e.loggedIn),o.xp6(1),o.Q6J("ngIf",e.loggedIn))},directives:[d.O5,f.yS],styles:["button.common-btn[_ngcontent-%COMP%]{background:transparent linear-gradient(103deg,#342CD7 0%,#BF38E6 100%) 0% 0% no-repeat padding-box;border-radius:26px;font-size:14px;line-height:18px;letter-spacing:.8px;color:#fff;padding:10px 22px}button.btn.common-btn[_ngcontent-%COMP%]{cursor:pointer}.leven-header[_ngcontent-%COMP%]{box-shadow:0 4px 8px rgba(0,0,0,.08);position:relative}.img-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:150px}.leaves-ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{letter-spacing:0px;padding-right:14px;font-size:15px;line-height:18px;color:#606060}.leaves-ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:unset}span.name-profile[_ngcontent-%COMP%]{width:55px;height:55px;background:#eee;display:inline-block;line-height:55px;text-align:center;border-radius:50%;font-weight:700;font-size:20px;cursor:pointer}.nav-link[_ngcontent-%COMP%]{cursor:pointer}.social-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex}.social-icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"]}),I)},8:function(e,i,r){r.d(i,{O:function(){return d}});var a,o=r(8583),u=r(4330),s=r(2528),c=r(1984),l=r(1482),g=r(8969),p=r(5665),f=r(2388),h=r(4098),v=r(7716),d=((a=n(function e(){t(this,e)})).\u0275fac=function(t){return new(t||a)},a.\u0275mod=v.oAB({type:a}),a.\u0275inj=v.cJS({providers:[f.v,p.L,c.Z,h.C,s._,l.N,g.Kz],imports:[[o.ez,u.Bz]]}),a)},2111:function(e,i,r){r.d(i,{H:function(){return c}});var a,o=r(9145),u=r(7716),s=r(4098),c=((a=function(){function e(n){t(this,e),this.apiService=n}return n(e,[{key:"getProfile",value:function(t){return this.apiService.httpRequest(o.jM,t)}},{key:"uploadPic",value:function(t){return this.apiService.uploadMedia(t)}},{key:"setPersonalInfo",value:function(t){return this.apiService.httpRequest(o.Mv,t)}},{key:"changePassword",value:function(t){return this.apiService.httpRequest(o.Nw,t)}}]),e}()).\u0275fac=function(t){return new(t||a)(u.LFG(s.C))},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a)}}])}();