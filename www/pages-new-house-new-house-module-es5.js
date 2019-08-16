(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-house-new-house-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/new-house/new-house.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/new-house/new-house.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <!-- <ion-back-button defaultHref=\"/\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-title>\n      Publicar Inmueble\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-button routerLink=\"/new-house-upload\">Subir Nuevo Inmueble</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/new-house/new-house.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/new-house/new-house.module.ts ***!
  \*****************************************************/
/*! exports provided: NewHousePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewHousePageModule", function() { return NewHousePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_house_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-house.page */ "./src/app/pages/new-house/new-house.page.ts");







var routes = [
    {
        path: '',
        component: _new_house_page__WEBPACK_IMPORTED_MODULE_6__["NewHousePage"]
    }
];
var NewHousePageModule = /** @class */ (function () {
    function NewHousePageModule() {
    }
    NewHousePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_new_house_page__WEBPACK_IMPORTED_MODULE_6__["NewHousePage"]]
        })
    ], NewHousePageModule);
    return NewHousePageModule;
}());



/***/ }),

/***/ "./src/app/pages/new-house/new-house.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/new-house/new-house.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy1ob3VzZS9uZXctaG91c2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/new-house/new-house.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/new-house/new-house.page.ts ***!
  \***************************************************/
/*! exports provided: NewHousePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewHousePage", function() { return NewHousePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


//nuevos


var NewHousePage = /** @class */ (function () {
    function NewHousePage(router, alertCtrl) {
        this.router = router;
        this.alertCtrl = alertCtrl;
    }
    NewHousePage.prototype.ngOnInit = function () {
    };
    NewHousePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    NewHousePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-house',
            template: __webpack_require__(/*! raw-loader!./new-house.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/new-house/new-house.page.html"),
            styles: [__webpack_require__(/*! ./new-house.page.scss */ "./src/app/pages/new-house/new-house.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], NewHousePage);
    return NewHousePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-new-house-new-house-module-es5.js.map