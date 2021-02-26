(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-activity-list-activity-list-module"],{

/***/ "3ROY":
/*!**********************************************!*\
  !*** ./src/app/services/activity.service.ts ***!
  \**********************************************/
/*! exports provided: ActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityService", function() { return ActivityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ActivityService = class ActivityService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8080/activity';
    }
    getActivities() {
        return this.http.get(this.url);
    }
};
ActivityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ActivityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ActivityService);



/***/ }),

/***/ "9rZV":
/*!*********************************************************************!*\
  !*** ./src/app/pages/activity-list/activity-list-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ActivityListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityListPageRoutingModule", function() { return ActivityListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _activity_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity-list.page */ "Dla/");




const routes = [
    {
        path: '',
        component: _activity_list_page__WEBPACK_IMPORTED_MODULE_3__["ActivityListPage"]
    }
];
let ActivityListPageRoutingModule = class ActivityListPageRoutingModule {
};
ActivityListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActivityListPageRoutingModule);



/***/ }),

/***/ "Dla/":
/*!***********************************************************!*\
  !*** ./src/app/pages/activity-list/activity-list.page.ts ***!
  \***********************************************************/
/*! exports provided: ActivityListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityListPage", function() { return ActivityListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_activity_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./activity-list.page.html */ "tRJ/");
/* harmony import */ var _activity_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activity-list.page.scss */ "e4a/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_activity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/activity.service */ "3ROY");







let ActivityListPage = class ActivityListPage {
    constructor(activityService, toastController, loadingCtrl) {
        this.activityService = activityService;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.activities = [];
    }
    showLoader() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create();
            yield loader.present();
            return loader;
        });
    }
    ngOnInit() {
        let loader = this.showLoader();
        this.activityService.getActivities().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'An Error has occured.',
                duration: 2000
            });
            toast.present();
            return [];
        }))).subscribe(activities => {
            loader.then(l => l.dismiss());
            this.activities = activities;
        });
    }
};
ActivityListPage.ctorParameters = () => [
    { type: src_app_services_activity_service__WEBPACK_IMPORTED_MODULE_6__["ActivityService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
ActivityListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-activity-list',
        template: _raw_loader_activity_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_activity_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ActivityListPage);



/***/ }),

/***/ "cS8t":
/*!*************************************************************!*\
  !*** ./src/app/pages/activity-list/activity-list.module.ts ***!
  \*************************************************************/
/*! exports provided: ActivityListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityListPageModule", function() { return ActivityListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _activity_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activity-list-routing.module */ "9rZV");
/* harmony import */ var _activity_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity-list.page */ "Dla/");







let ActivityListPageModule = class ActivityListPageModule {
};
ActivityListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _activity_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActivityListPageRoutingModule"]
        ],
        declarations: [_activity_list_page__WEBPACK_IMPORTED_MODULE_6__["ActivityListPage"]]
    })
], ActivityListPageModule);



/***/ }),

/***/ "e4a/":
/*!*************************************************************!*\
  !*** ./src/app/pages/activity-list/activity-list.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpdml0eS1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "tRJ/":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activity-list/activity-list.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Activities</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let activity of activities\">\n      <ion-label>\n        {{ activity.label }}\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-activity-list-activity-list-module.js.map