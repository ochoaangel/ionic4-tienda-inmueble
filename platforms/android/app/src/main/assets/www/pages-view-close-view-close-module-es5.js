(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-view-close-view-close-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/view-close/view-close.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/view-close/view-close.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        <!-- <ion-back-button defaultHref=\"/\"></ion-back-button> -->\n      </ion-buttons>\n      <ion-title>\n        Visitas Confirmadas\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n      <ion-list>\n        <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxx BUCLE xxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->\n        <ion-item\n          *ngFor=\"let c of [1, 1, 1]; let i = index\"\n          routerLink=\"/view-open-detail\"\n        >\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"2\">\n                <ion-thumbnail>\n                  <img src=\"../assets/myimages/c02.jpg\" />\n                </ion-thumbnail>\n              </ion-col>\n              <ion-col size=\"7\"> Titulo Casa ó Apartamento número {{ i }}</ion-col>\n              <ion-col size=\"1\"><ion-icon name=\"help-circle\"></ion-icon></ion-col>\n              <ion-col size=\"1\"><ion-icon name=\"help-circle\"></ion-icon></ion-col>\n              <ion-col size=\"1\"><ion-icon name=\"play\"></ion-icon></ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxx FIN BUCLE xxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->\n      </ion-list>\n    </ion-content>"

/***/ }),

/***/ "./src/app/pages/view-close/view-close.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/view-close/view-close.module.ts ***!
  \*******************************************************/
/*! exports provided: ViewClosePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewClosePageModule", function() { return ViewClosePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_close_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-close.page */ "./src/app/pages/view-close/view-close.page.ts");







var routes = [
    {
        path: '',
        component: _view_close_page__WEBPACK_IMPORTED_MODULE_6__["ViewClosePage"]
    }
];
var ViewClosePageModule = /** @class */ (function () {
    function ViewClosePageModule() {
    }
    ViewClosePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_view_close_page__WEBPACK_IMPORTED_MODULE_6__["ViewClosePage"]]
        })
    ], ViewClosePageModule);
    return ViewClosePageModule;
}());



/***/ }),

/***/ "./src/app/pages/view-close/view-close.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/view-close/view-close.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXctY2xvc2Uvdmlldy1jbG9zZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/view-close/view-close.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/view-close/view-close.page.ts ***!
  \*****************************************************/
/*! exports provided: ViewClosePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewClosePage", function() { return ViewClosePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewClosePage = /** @class */ (function () {
    function ViewClosePage() {
    }
    ViewClosePage.prototype.ngOnInit = function () {
    };
    ViewClosePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-close',
            template: __webpack_require__(/*! raw-loader!./view-close.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/view-close/view-close.page.html"),
            styles: [__webpack_require__(/*! ./view-close.page.scss */ "./src/app/pages/view-close/view-close.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViewClosePage);
    return ViewClosePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-view-close-view-close-module-es5.js.map