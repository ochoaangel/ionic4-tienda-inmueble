(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-view-open-view-open-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/view-open/view-open.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/view-open/view-open.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <!-- <ion-back-button defaultHref=\"/\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-title>\n      Visitas Propuestas\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxx BUCLE xxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->\n    <ion-item\n      *ngFor=\"let c of [1, 1, 1, 1, 1, 1, 1, 1]; let i = index\"\n      routerLink=\"/view-open-detail\"\n    >\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">\n            <ion-thumbnail>\n              <img src=\"../assets/myimages/a04.jpg\"  />\n            </ion-thumbnail>\n          </ion-col>\n          <ion-col size=\"7\"> Titulo Casa ó Apartamento número {{ i }}</ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"help-circle\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"help-circle\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"play\"></ion-icon></ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxx FIN BUCLE xxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/view-open/view-open.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/view-open/view-open.module.ts ***!
  \*****************************************************/
/*! exports provided: ViewOpenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOpenPageModule", function() { return ViewOpenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_open_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-open.page */ "./src/app/pages/view-open/view-open.page.ts");







const routes = [
    {
        path: '',
        component: _view_open_page__WEBPACK_IMPORTED_MODULE_6__["ViewOpenPage"]
    }
];
let ViewOpenPageModule = class ViewOpenPageModule {
};
ViewOpenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_view_open_page__WEBPACK_IMPORTED_MODULE_6__["ViewOpenPage"]]
    })
], ViewOpenPageModule);



/***/ }),

/***/ "./src/app/pages/view-open/view-open.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/view-open/view-open.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXctb3Blbi92aWV3LW9wZW4ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/view-open/view-open.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/view-open/view-open.page.ts ***!
  \***************************************************/
/*! exports provided: ViewOpenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOpenPage", function() { return ViewOpenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


//nuevos


let ViewOpenPage = class ViewOpenPage {
    constructor(router, alertCtrl) {
        this.router = router;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
    }
};
ViewOpenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
ViewOpenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-open',
        template: __webpack_require__(/*! raw-loader!./view-open.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/view-open/view-open.page.html"),
        styles: [__webpack_require__(/*! ./view-open.page.scss */ "./src/app/pages/view-open/view-open.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], ViewOpenPage);



/***/ })

}]);
//# sourceMappingURL=pages-view-open-view-open-module-es2015.js.map