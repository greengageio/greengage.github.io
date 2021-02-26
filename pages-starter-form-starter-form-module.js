(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-starter-form-starter-form-module"],{

/***/ "1NKR":
/*!*******************************************************************!*\
  !*** ./src/app/pages/starter-form/starter-form-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: StarterFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterFormPageRoutingModule", function() { return StarterFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _starter_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./starter-form.page */ "w/Ra");




const routes = [
    {
        path: '',
        component: _starter_form_page__WEBPACK_IMPORTED_MODULE_3__["StarterFormPage"]
    }
];
let StarterFormPageRoutingModule = class StarterFormPageRoutingModule {
};
StarterFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StarterFormPageRoutingModule);



/***/ }),

/***/ "7WoQ":
/*!***********************************************************!*\
  !*** ./src/app/pages/starter-form/starter-form.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n}\n\nion-segment {\n  margin-bottom: 50px;\n}\n\nh1 {\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0YXJ0ZXItZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSiIsImZpbGUiOiJzdGFydGVyLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tc2VnbWVudCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuaDEge1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "e3VT":
/*!***********************************************************!*\
  !*** ./src/app/pages/starter-form/starter-form.module.ts ***!
  \***********************************************************/
/*! exports provided: StarterFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterFormPageModule", function() { return StarterFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _starter_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starter-form-routing.module */ "1NKR");
/* harmony import */ var _starter_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./starter-form.page */ "w/Ra");







let StarterFormPageModule = class StarterFormPageModule {
};
StarterFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _starter_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["StarterFormPageRoutingModule"]
        ],
        declarations: [_starter_form_page__WEBPACK_IMPORTED_MODULE_6__["StarterFormPage"]]
    })
], StarterFormPageModule);



/***/ }),

/***/ "gbST":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/starter-form/starter-form.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Quickform</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager=\"true\">\n    <!-- Slide 1 -->\n    <ion-slide>\n      <ion-text>\n        <h1 class=\"ion-margin-bottom\">Votre rythme de travail</h1>\n        <h2>Nombre de jours travaillés par semaine:</h2>\n        <ion-segment scrollable value=\"heart\">\n          <ion-segment-button value=\"1\">\n            <ion-label>1</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"2\">\n            <ion-label>2</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"3\">\n            <ion-label>3</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"4\">\n            <ion-label>4</ion-label>\n          </ion-segment-button>  \n          <ion-segment-button value=\"5\">\n            <ion-label>5</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"6\">\n            <ion-label>6</ion-label>\n          </ion-segment-button>      \n        </ion-segment>\n        <h2 class=\"ion-margin-top\">Nombre de jours télétravaillés par semaine:</h2>\n        <ion-segment scrollable value=\"heart\">\n          <ion-segment-button value=\"1\">\n            <ion-label>1</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"2\">\n            <ion-label>2</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"3\">\n            <ion-label>3</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"4\">\n            <ion-label>4</ion-label>\n          </ion-segment-button>  \n          <ion-segment-button value=\"5\">\n            <ion-label>5</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"6\">\n            <ion-label>6</ion-label>\n          </ion-segment-button>    \n        </ion-segment>\n        <ion-button (click)=\"next()\" fill=\"outline\" class=\"ion-margin\">Next</ion-button>\n      </ion-text>\n    </ion-slide>\n    <ion-slide>\n      <ion-text>\n        <h1 class=\"ion-margin-bottom\">Parlons de votre rythme de travail</h1>\n        <h2>Nombre de jours travaillés par semaine:</h2>\n        <ion-button (click)=\"next()\" fill=\"outline\" class=\"ion-margin\">Next</ion-button>\n      </ion-text>\n    </ion-slide> \n  </ion-slides>\n</ion-content>\n");

/***/ }),

/***/ "w/Ra":
/*!*********************************************************!*\
  !*** ./src/app/pages/starter-form/starter-form.page.ts ***!
  \*********************************************************/
/*! exports provided: StarterFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterFormPage", function() { return StarterFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_starter_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./starter-form.page.html */ "gbST");
/* harmony import */ var _starter_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./starter-form.page.scss */ "7WoQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let StarterFormPage = class StarterFormPage {
    constructor() { }
    ngOnInit() {
    }
    next() {
        this.slides.slideNext();
    }
};
StarterFormPage.ctorParameters = () => [];
StarterFormPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"],] }]
};
StarterFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-starter-form',
        template: _raw_loader_starter_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_starter_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StarterFormPage);



/***/ })

}]);
//# sourceMappingURL=pages-starter-form-starter-form-module.js.map