(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-house-upload-new-house-upload-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/new-house-upload/new-house-upload.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/new-house-upload/new-house-upload.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        <!-- <ion-back-button defaultHref=\"/\"></ion-back-button> -->\n      </ion-buttons>\n      <ion-title>\n        Publicar Nuevo Inmueble\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    Publicar Nuevo Inmueble\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/new-house-upload/new-house-upload.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/new-house-upload/new-house-upload.module.ts ***!
  \*******************************************************************/
/*! exports provided: NewHouseUploadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewHouseUploadPageModule", function() { return NewHouseUploadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_house_upload_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-house-upload.page */ "./src/app/pages/new-house-upload/new-house-upload.page.ts");







var routes = [
    {
        path: '',
        component: _new_house_upload_page__WEBPACK_IMPORTED_MODULE_6__["NewHouseUploadPage"]
    }
];
var NewHouseUploadPageModule = /** @class */ (function () {
    function NewHouseUploadPageModule() {
    }
    NewHouseUploadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_new_house_upload_page__WEBPACK_IMPORTED_MODULE_6__["NewHouseUploadPage"]]
        })
    ], NewHouseUploadPageModule);
    return NewHouseUploadPageModule;
}());



/***/ }),

/***/ "./src/app/pages/new-house-upload/new-house-upload.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/new-house-upload/new-house-upload.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy1ob3VzZS11cGxvYWQvbmV3LWhvdXNlLXVwbG9hZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/new-house-upload/new-house-upload.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/new-house-upload/new-house-upload.page.ts ***!
  \*****************************************************************/
/*! exports provided: NewHouseUploadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewHouseUploadPage", function() { return NewHouseUploadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewHouseUploadPage = /** @class */ (function () {
    function NewHouseUploadPage() {
    }
    NewHouseUploadPage.prototype.ngOnInit = function () {
    };
    NewHouseUploadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-house-upload',
            template: __webpack_require__(/*! raw-loader!./new-house-upload.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/new-house-upload/new-house-upload.page.html"),
            styles: [__webpack_require__(/*! ./new-house-upload.page.scss */ "./src/app/pages/new-house-upload/new-house-upload.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewHouseUploadPage);
    return NewHouseUploadPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-new-house-upload-new-house-upload-module-es5.js.map