(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mobility-dashboard-mobility-dashboard-module"],{

/***/ "+0lf":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mobility-dashboard/mobility-dashboard.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Mobility Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed class=\"ion-no-padding ion-no-margin\">\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"6\">\n        <ion-item lines=\"none\">\n          <ion-icon size=\"large\" slot=\"start\" name=\"git-network\" color=\"primary\"></ion-icon>\n          <ion-label>Work Location</ion-label>\n          <ion-select value=\"all\" multiple=\"false\" placeholder=\"Select work location\">\n            <ion-select-option value=\"all\">All</ion-select-option>\n            <ion-select-option value=\"niors\">Niors</ion-select-option>\n            <ion-select-option value=\"strasbourg\">Strasbourg</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"6\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Remote work</ion-card-subtitle>\n            <ion-card-title># of employees</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item>\n                <ion-icon name=\"home\" slot=\"start\"></ion-icon>\n                <ion-label>34 total</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon name=\"cellular\" slot=\"start\"></ion-icon>\n                <ion-label>1.7 days on average</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"12\" size-md=\"6\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Adoption</ion-card-subtitle>\n            <ion-card-title># of Profiles Filled</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item>\n                <ion-icon name=\"people\" slot=\"start\"></ion-icon>\n                <ion-label>34 total</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon name=\"trending-up\" slot=\"start\"></ion-icon>\n                <ion-label>5 more in the past 7 days</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"6\">\n        <ion-item lines=\"none\">\n          <ion-label>Extrapolate values</ion-label>\n          <ion-toggle></ion-toggle>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"4\">\n        <ion-card>\n          <canvas #doughnutCanvas style=\"position: relative; height:100%; width:100%\"></canvas>\n          <ion-card-header>\n            <ion-card-title>Distance traveled</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item>\n                <ion-icon color=\"primary\" slot=\"start\" name=\"train\"></ion-icon>\n                <ion-label slot=\"end\">18%</ion-label>\n                <ion-label>43 km</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon color=\"secondary\" slot=\"start\" name=\"bicycle\"></ion-icon>\n                <ion-label slot=\"end\">80%</ion-label>\n                <ion-label>430 km</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon color=\"tertiary\" slot=\"start\" name=\"car-sport\"></ion-icon>\n                <ion-label slot=\"end\">18%</ion-label>\n                <ion-label>43 km</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon color=\"danger\" slot=\"start\" name=\"walk\"></ion-icon>\n                <ion-label slot=\"end\">2%</ion-label>\n                <ion-label>2 km</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"12\" size-md=\"4\">\n        <ion-card>\n          <canvas #doughnutCanvas2 style=\"position: relative; height:100%; width:100%\"></canvas>\n          <ion-card-header>\n            <ion-card-title>Employees' usage</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item>\n                <ion-icon slot=\"start\" name=\"train\"></ion-icon>\n                <ion-label slot=\"end\">18%</ion-label>\n                <ion-label>12</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon slot=\"start\" name=\"bicycle\"></ion-icon>\n                <ion-label slot=\"end\">80%</ion-label>\n                <ion-label>122</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon slot=\"start\" name=\"car-sport\"></ion-icon>\n                <ion-label slot=\"end\">18%</ion-label>\n                <ion-label>200</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon slot=\"start\" name=\"walk\"></ion-icon>\n                <ion-label slot=\"end\">2%</ion-label>\n                <ion-label>300</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"12\" size-md=\"4\">\n        <ion-card>\n          <canvas #doughnutCanvas3 style=\"position: relative; height:100%; width:100%\"></canvas>\n          <ion-card-header>\n            <ion-card-title>Emitted CO2</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item>\n                <ion-icon slot=\"start\" name=\"train\"></ion-icon>\n                <ion-label slot=\"end\">18%</ion-label>\n                <ion-label>120g</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon slot=\"start\" name=\"bicycle\"></ion-icon>\n                <ion-label slot=\"end\">80%</ion-label>\n                <ion-label>1000kg</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon slot=\"start\" name=\"car-sport\"></ion-icon>\n                <ion-label slot=\"end\">18%</ion-label>\n                <ion-label>2t</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon slot=\"start\" name=\"walk\"></ion-icon>\n                <ion-label slot=\"end\">2%</ion-label>\n                <ion-label>90kg</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-footer class=\"ion-text-center ion-padding\">\n    <ion-toolbar>\n      <ion-button fill=\"outline\" color=\"secondary\" (click)=\"onClick()\">\n        <ion-icon slot=\"start\" name=\"cloud-download\"></ion-icon>\n        Download report\n      </ion-button>\n    </ion-toolbar>\n  </ion-footer>\n</ion-content>\n");

/***/ }),

/***/ "8rMd":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/mobility-dashboard/mobility-dashboard-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: MobilityDashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobilityDashboardPageRoutingModule", function() { return MobilityDashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mobility_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobility-dashboard.page */ "Q67f");




const routes = [
    {
        path: '',
        component: _mobility_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["MobilityDashboardPage"]
    }
];
let MobilityDashboardPageRoutingModule = class MobilityDashboardPageRoutingModule {
};
MobilityDashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MobilityDashboardPageRoutingModule);



/***/ }),

/***/ "D/sR":
/*!***********************************************************************!*\
  !*** ./src/app/pages/mobility-dashboard/mobility-dashboard.module.ts ***!
  \***********************************************************************/
/*! exports provided: MobilityDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobilityDashboardPageModule", function() { return MobilityDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _mobility_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobility-dashboard-routing.module */ "8rMd");
/* harmony import */ var _mobility_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobility-dashboard.page */ "Q67f");







let MobilityDashboardPageModule = class MobilityDashboardPageModule {
};
MobilityDashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mobility_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["MobilityDashboardPageRoutingModule"]
        ],
        declarations: [_mobility_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["MobilityDashboardPage"]]
    })
], MobilityDashboardPageModule);



/***/ }),

/***/ "PvnC":
/*!***********************************************************************!*\
  !*** ./src/app/pages/mobility-dashboard/mobility-dashboard.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2JpbGl0eS1kYXNoYm9hcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "Q67f":
/*!*********************************************************************!*\
  !*** ./src/app/pages/mobility-dashboard/mobility-dashboard.page.ts ***!
  \*********************************************************************/
/*! exports provided: MobilityDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobilityDashboardPage", function() { return MobilityDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mobility_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mobility-dashboard.page.html */ "+0lf");
/* harmony import */ var _mobility_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobility-dashboard.page.scss */ "PvnC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);





let MobilityDashboardPage = class MobilityDashboardPage {
    constructor() { }
    ngAfterViewInit() {
        this.doughnutChartMethod();
    }
    doughnutChartMethod() {
        this.doughnutChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ['Train', 'Car', 'Bicycle', 'Walk'],
                datasets: [{
                        label: 'eC02',
                        data: [50, 29, 15, 10, 7],
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            '#FFCE56',
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56'
                        ]
                    }]
            }
        });
        this.doughnutChart2 = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.doughnutCanvas2.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ['Train', 'Car', 'Bicycle', 'Walk'],
                datasets: [{
                        label: 'eC02',
                        data: [50, 29, 15, 10, 7],
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            '#FFCE56',
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56'
                        ]
                    }]
            }
        });
        this.doughnutChart3 = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.doughnutCanvas3.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ['Train', 'Car', 'Bicycle', 'Walk'],
                datasets: [{
                        label: 'eC02',
                        data: [50, 29, 15, 10, 7],
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            '#FFCE56',
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56'
                        ]
                    }]
            }
        });
    }
};
MobilityDashboardPage.ctorParameters = () => [];
MobilityDashboardPage.propDecorators = {
    doughnutCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['doughnutCanvas',] }],
    doughnutCanvas2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['doughnutCanvas2',] }],
    doughnutCanvas3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['doughnutCanvas3',] }]
};
MobilityDashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mobility-dashboard',
        template: _raw_loader_mobility_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mobility_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MobilityDashboardPage);



/***/ })

}]);
//# sourceMappingURL=pages-mobility-dashboard-mobility-dashboard-module.js.map