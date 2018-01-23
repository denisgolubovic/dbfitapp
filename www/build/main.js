webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RootPage = (function () {
    function RootPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RootPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RootPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-root',template:/*ion-inline-start:"/home/sbotonji/Repos/dbfitapp/src/pages/root/root.html"*/'<ion-content text-center scroll="false">\n	<ion-row>\n		<ion-col>\n			<img src="http://via.placeholder.com/250x250"/>\n		</ion-col>\n	</ion-row>\n\n	<ion-row>\n		<ion-col>\n			<p>Jag har ett dbfit konto<p>\n			<button ion-button (click)="login()" outline>Logga in</button>\n		</ion-col>\n	</ion-row>\n\n	<ion-row>\n		<ion-col>\n			<p>Börja din resa idag!<p>\n			<button ion-button outline>Till hemsida</button>\n		</ion-col>\n	</ion-row>\n</ion-content>'/*ion-inline-end:"/home/sbotonji/Repos/dbfitapp/src/pages/root/root.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], RootPage);
    return RootPage;
}());

//# sourceMappingURL=root.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overview_overview__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__overview_overview__["a" /* OverviewPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/sbotonji/Repos/dbfitapp/src/pages/login/login.html"*/'<ion-content text-center scroll="false">\n	<ion-row>\n		<ion-col>\n			<img src="http://via.placeholder.com/250x250"/>\n		</ion-col>\n	</ion-row>\n\n	<ion-row class="formStyle">\n		<ion-col>\n			<ion-input type="email" placeholder="Användarnamn/Email"></ion-input>\n			<ion-input type="password" placeholder="Lösenord"></ion-input>					\n		</ion-col>\n	</ion-row>\n\n	<ion-row>\n		<ion-col>	\n			<a href="https://www.google.com">Jag har glömt mitt lösenord</a>\n		</ion-col>\n	</ion-row>\n\n	<ion-row class="logobtnStyle">\n		<ion-col>\n			<button ion-button (click)="login()" outline>Logga in</button>\n		</ion-col>		\n	</ion-row>\n\n</ion-content>'/*ion-inline-end:"/home/sbotonji/Repos/dbfitapp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverviewPage = (function () {
    function OverviewPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        //Chart Labels
        this.barChartLabels = ['2011', '2012', '2013', '2014', '2015', '2016', '2017'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        //Chart data
        this.barChartData = [
            { data: [66, 55, 83, 82, 56, 51, 43], label: 'Loss' },
            { data: [29, 38, 40, 21, 82, 30, 89], label: 'Profit' }
        ];
    }
    // Chart events
    OverviewPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    // Chart events
    OverviewPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    OverviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-overview',template:/*ion-inline-start:"/home/sbotonji/Repos/dbfitapp/src/pages/overview/overview.html"*/'<ion-card class="cardStyle">\n    <ion-card-header>\n      Mat\n    </ion-card-header>\n    <ion-card-content>\n      <canvas baseChart height="80"\n        [datasets]="barChartData"\n        [labels]="barChartLabels"\n        [options]="barChartOptions"\n        [legend]="barChartLegend"\n        [chartType]="barChartType"\n        (chartHover)="chartHovered($event)"\n        (chartClick)="chartClicked($event)">\n      </canvas>\n    </ion-card-content>\n</ion-card>\n<ion-card class="cardStyle">\n    <ion-card-header>\n      Träning\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n</ion-card>\n<ion-card class="cardStyle">\n    <ion-card-header>\n      Inspiration\n    </ion-card-header>\n    <ion-card-content>\n      You\'re only one workout away from a good mood.\n    </ion-card-content>\n</ion-card>s'/*ion-inline-end:"/home/sbotonji/Repos/dbfitapp/src/pages/overview/overview.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
    ], OverviewPage);
    return OverviewPage;
    var _a;
}());

//# sourceMappingURL=overview.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_root_root__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_overview_overview__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_root_root__["a" /* RootPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_overview_overview__["a" /* OverviewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_root_root__["a" /* RootPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_overview_overview__["a" /* OverviewPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_root_root__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_root_root__["a" /* RootPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/sbotonji/Repos/dbfitapp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/sbotonji/Repos/dbfitapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 285,
	"./af.js": 285,
	"./ar": 286,
	"./ar-dz": 287,
	"./ar-dz.js": 287,
	"./ar-kw": 288,
	"./ar-kw.js": 288,
	"./ar-ly": 289,
	"./ar-ly.js": 289,
	"./ar-ma": 290,
	"./ar-ma.js": 290,
	"./ar-sa": 291,
	"./ar-sa.js": 291,
	"./ar-tn": 292,
	"./ar-tn.js": 292,
	"./ar.js": 286,
	"./az": 293,
	"./az.js": 293,
	"./be": 294,
	"./be.js": 294,
	"./bg": 295,
	"./bg.js": 295,
	"./bn": 296,
	"./bn.js": 296,
	"./bo": 297,
	"./bo.js": 297,
	"./br": 298,
	"./br.js": 298,
	"./bs": 299,
	"./bs.js": 299,
	"./ca": 300,
	"./ca.js": 300,
	"./cs": 301,
	"./cs.js": 301,
	"./cv": 302,
	"./cv.js": 302,
	"./cy": 303,
	"./cy.js": 303,
	"./da": 304,
	"./da.js": 304,
	"./de": 305,
	"./de-at": 306,
	"./de-at.js": 306,
	"./de-ch": 307,
	"./de-ch.js": 307,
	"./de.js": 305,
	"./dv": 308,
	"./dv.js": 308,
	"./el": 309,
	"./el.js": 309,
	"./en-au": 310,
	"./en-au.js": 310,
	"./en-ca": 311,
	"./en-ca.js": 311,
	"./en-gb": 312,
	"./en-gb.js": 312,
	"./en-ie": 313,
	"./en-ie.js": 313,
	"./en-nz": 314,
	"./en-nz.js": 314,
	"./eo": 315,
	"./eo.js": 315,
	"./es": 316,
	"./es-do": 317,
	"./es-do.js": 317,
	"./es.js": 316,
	"./et": 318,
	"./et.js": 318,
	"./eu": 319,
	"./eu.js": 319,
	"./fa": 320,
	"./fa.js": 320,
	"./fi": 321,
	"./fi.js": 321,
	"./fo": 322,
	"./fo.js": 322,
	"./fr": 323,
	"./fr-ca": 324,
	"./fr-ca.js": 324,
	"./fr-ch": 325,
	"./fr-ch.js": 325,
	"./fr.js": 323,
	"./fy": 326,
	"./fy.js": 326,
	"./gd": 327,
	"./gd.js": 327,
	"./gl": 328,
	"./gl.js": 328,
	"./gom-latn": 329,
	"./gom-latn.js": 329,
	"./he": 330,
	"./he.js": 330,
	"./hi": 331,
	"./hi.js": 331,
	"./hr": 332,
	"./hr.js": 332,
	"./hu": 333,
	"./hu.js": 333,
	"./hy-am": 334,
	"./hy-am.js": 334,
	"./id": 335,
	"./id.js": 335,
	"./is": 336,
	"./is.js": 336,
	"./it": 337,
	"./it.js": 337,
	"./ja": 338,
	"./ja.js": 338,
	"./jv": 339,
	"./jv.js": 339,
	"./ka": 340,
	"./ka.js": 340,
	"./kk": 341,
	"./kk.js": 341,
	"./km": 342,
	"./km.js": 342,
	"./kn": 343,
	"./kn.js": 343,
	"./ko": 344,
	"./ko.js": 344,
	"./ky": 345,
	"./ky.js": 345,
	"./lb": 346,
	"./lb.js": 346,
	"./lo": 347,
	"./lo.js": 347,
	"./lt": 348,
	"./lt.js": 348,
	"./lv": 349,
	"./lv.js": 349,
	"./me": 350,
	"./me.js": 350,
	"./mi": 351,
	"./mi.js": 351,
	"./mk": 352,
	"./mk.js": 352,
	"./ml": 353,
	"./ml.js": 353,
	"./mr": 354,
	"./mr.js": 354,
	"./ms": 355,
	"./ms-my": 356,
	"./ms-my.js": 356,
	"./ms.js": 355,
	"./my": 357,
	"./my.js": 357,
	"./nb": 358,
	"./nb.js": 358,
	"./ne": 359,
	"./ne.js": 359,
	"./nl": 360,
	"./nl-be": 361,
	"./nl-be.js": 361,
	"./nl.js": 360,
	"./nn": 362,
	"./nn.js": 362,
	"./pa-in": 363,
	"./pa-in.js": 363,
	"./pl": 364,
	"./pl.js": 364,
	"./pt": 365,
	"./pt-br": 366,
	"./pt-br.js": 366,
	"./pt.js": 365,
	"./ro": 367,
	"./ro.js": 367,
	"./ru": 368,
	"./ru.js": 368,
	"./sd": 369,
	"./sd.js": 369,
	"./se": 370,
	"./se.js": 370,
	"./si": 371,
	"./si.js": 371,
	"./sk": 372,
	"./sk.js": 372,
	"./sl": 373,
	"./sl.js": 373,
	"./sq": 374,
	"./sq.js": 374,
	"./sr": 375,
	"./sr-cyrl": 376,
	"./sr-cyrl.js": 376,
	"./sr.js": 375,
	"./ss": 377,
	"./ss.js": 377,
	"./sv": 378,
	"./sv.js": 378,
	"./sw": 379,
	"./sw.js": 379,
	"./ta": 380,
	"./ta.js": 380,
	"./te": 381,
	"./te.js": 381,
	"./tet": 382,
	"./tet.js": 382,
	"./th": 383,
	"./th.js": 383,
	"./tl-ph": 384,
	"./tl-ph.js": 384,
	"./tlh": 385,
	"./tlh.js": 385,
	"./tr": 386,
	"./tr.js": 386,
	"./tzl": 387,
	"./tzl.js": 387,
	"./tzm": 388,
	"./tzm-latn": 389,
	"./tzm-latn.js": 389,
	"./tzm.js": 388,
	"./uk": 390,
	"./uk.js": 390,
	"./ur": 391,
	"./ur.js": 391,
	"./uz": 392,
	"./uz-latn": 393,
	"./uz-latn.js": 393,
	"./uz.js": 392,
	"./vi": 394,
	"./vi.js": 394,
	"./x-pseudo": 395,
	"./x-pseudo.js": 395,
	"./yo": 396,
	"./yo.js": 396,
	"./zh-cn": 397,
	"./zh-cn.js": 397,
	"./zh-hk": 398,
	"./zh-hk.js": 398,
	"./zh-tw": 399,
	"./zh-tw.js": 399
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 432;

/***/ })

},[197]);
//# sourceMappingURL=main.js.map