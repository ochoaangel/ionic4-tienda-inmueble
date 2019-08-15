(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-house-detail-house-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/house-detail/house-detail.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/house-detail/house-detail.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Detalle de Inmueble\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-img src=\"./assets/myimages/c01.jpg\">  </ion-img>\n  <ion-card > \n    <ion-card-subtitle padding>Precio</ion-card-subtitle>\n\n    <!-- <ion-card-title padding>100.000.000 $</ion-card-title> -->\n\n\n    <ion-grid >\n        <ion-row justify-content-center align-items-center >\n          <h1>100.000.000 $</h1>\n        </ion-row>\n      </ion-grid>\n\n\n\n\n\n  </ion-card>\n  <ion-grid>\n    <ion-row justify-content-center align-items-center>\n      <!-- <ion-col size=\"6\" size-lg=\"1\"  size-md=\"2\" size-sm=\"3\" size-xs=\"6\" *ngFor=\"let c of [1, 1, 1, 1, 1, 1, 1, 1]\"> -->\n      <ion-card *ngFor=\"let c of [1, 1, 1, 1, 1, 1, 1, 1]\">\n        <ion-card-title>Dato {{c}}:</ion-card-title>\n        <ion-card-content>XXXX.XX.x..</ion-card-content>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card>\n    <ion-card-subtitle>Ubicación</ion-card-subtitle>\n    <ion-card-content\n      >Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah\n      Blah Blah\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-subtitle>Descripción Adicional</ion-card-subtitle>\n    <ion-card-content\n      >Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah\n      Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah\n      Blah Blah Blah\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-button expand=\"fill\" color=\"primary\" routerLink=\"/login\">Planificar Visita</ion-button>\n"

/***/ }),

/***/ "./src/app/pages/house-detail/house-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/house-detail/house-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: HouseDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseDetailPageModule", function() { return HouseDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _house_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./house-detail.page */ "./src/app/pages/house-detail/house-detail.page.ts");







const routes = [
    {
        path: '',
        component: _house_detail_page__WEBPACK_IMPORTED_MODULE_6__["HouseDetailPage"]
    }
];
let HouseDetailPageModule = class HouseDetailPageModule {
};
HouseDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_house_detail_page__WEBPACK_IMPORTED_MODULE_6__["HouseDetailPage"]]
    })
], HouseDetailPageModule);



/***/ }),

/***/ "./src/app/pages/house-detail/house-detail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/house-detail/house-detail.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvdXNlLWRldGFpbC9ob3VzZS1kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/house-detail/house-detail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/house-detail/house-detail.page.ts ***!
  \*********************************************************/
/*! exports provided: HouseDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseDetailPage", function() { return HouseDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HouseDetailPage = class HouseDetailPage {
    constructor() { }
    ngOnInit() {
    }
};
HouseDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-house-detail',
        template: __webpack_require__(/*! raw-loader!./house-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/house-detail/house-detail.page.html"),
        styles: [__webpack_require__(/*! ./house-detail.page.scss */ "./src/app/pages/house-detail/house-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HouseDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-house-detail-house-detail-module-es2015.js.map