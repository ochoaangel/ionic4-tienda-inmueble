(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-view-close-detail-view-close-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/view-close-detail/view-close-detail.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/view-close-detail/view-close-detail.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>view_close_detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <!-- <ion-list> -->\n    <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxx BUCLE xxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->\n    <!-- <ion-item\n        *ngFor=\"let c of [1, 1, 1, 1, 1, 1, 1, 1]; let i = index\"\n        routerLink=\"/view-open-detail\"\n      >\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"7\"> Titulo Casa ó Apartamento número {{ i }}</ion-col>\n            <ion-col size=\"2\">x</ion-col>\n            <ion-col size=\"2\">X</ion-col>\n            <ion-col size=\"1\"><ion-icon name=\"play\"></ion-icon></ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item> -->\n  \n    <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxx FIN BUCLE xxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->\n    <!-- </ion-list> -->\n    <!-- <ion-card justify-content-center align-items-center>\n      <ion-card-title padding>Titulo del Inmueble</ion-card-title>\n    </ion-card> -->\n  \n    <ion-grid>\n      <ion-row justify-content-center align-items-center>\n        <h1>Titulo del Inmueble</h1>\n      </ion-row>\n    </ion-grid>\n  <!-- \n    <ion-label justify-content-center align-items-center\n      >Titulo del Inmueble\n    </ion-label> -->\n    <ion-card>\n      <ion-card-title padding>Día 2/10/2019</ion-card-title>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\"> 10:00 AM </ion-col>\n            <ion-col size=\"3\"><ion-icon name=\"close-circle\"></ion-icon></ion-col>\n            <ion-col size=\"3\"\n              ><ion-icon name=\"checkmark-circle\"></ion-icon\n            ></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\"> 2:00 PM </ion-col>\n            <ion-col size=\"3\"><ion-icon name=\"close-circle\"></ion-icon></ion-col>\n            <ion-col size=\"3\"\n              ><ion-icon name=\"checkmark-circle\"></ion-icon\n            ></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\"> 3:30 PM </ion-col>\n            <ion-col size=\"3\"><ion-icon name=\"close-circle\"></ion-icon></ion-col>\n            <ion-col size=\"3\"\n              ><ion-icon name=\"checkmark-circle\"></ion-icon\n            ></ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-title padding>Día 5/10/2019</ion-card-title>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\"> 10:00 AM </ion-col>\n            <ion-col size=\"3\"><ion-icon name=\"close-circle\"></ion-icon></ion-col>\n            <ion-col size=\"3\"\n              ><ion-icon name=\"checkmark-circle\"></ion-icon\n            ></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\"> 2:00 PM </ion-col>\n            <ion-col size=\"3\"><ion-icon name=\"close-circle\"></ion-icon></ion-col>\n            <ion-col size=\"3\"\n              ><ion-icon name=\"checkmark-circle\"></ion-icon\n            ></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\"> 3:30 PM </ion-col>\n            <ion-col size=\"3\"><ion-icon name=\"close-circle\"></ion-icon></ion-col>\n            <ion-col size=\"3\"\n              ><ion-icon name=\"checkmark-circle\"></ion-icon\n            ></ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-title padding>Día 6/10/2019</ion-card-title>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\"> 10:00 AM </ion-col>\n            <ion-col size=\"3\"><ion-icon name=\"close-circle\"></ion-icon></ion-col>\n            <ion-col size=\"3\"\n              ><ion-icon name=\"checkmark-circle\"></ion-icon\n            ></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\"> 2:00 PM </ion-col>\n            <ion-col size=\"3\"><ion-icon name=\"close-circle\"></ion-icon></ion-col>\n            <ion-col size=\"3\"\n              ><ion-icon name=\"checkmark-circle\"></ion-icon\n            ></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\"> 3:30 PM </ion-col>\n            <ion-col size=\"3\"><ion-icon name=\"close-circle\"></ion-icon></ion-col>\n            <ion-col size=\"3\"\n              ><ion-icon name=\"checkmark-circle\"></ion-icon\n            ></ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>\n  <ion-button expand=\"fill\" color=\"primary\" routerLink=\"/login\">Guardar</ion-button>\n  "

/***/ }),

/***/ "./src/app/pages/view-close-detail/view-close-detail.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/view-close-detail/view-close-detail.module.ts ***!
  \*********************************************************************/
/*! exports provided: ViewCloseDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCloseDetailPageModule", function() { return ViewCloseDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_close_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-close-detail.page */ "./src/app/pages/view-close-detail/view-close-detail.page.ts");







var routes = [
    {
        path: '',
        component: _view_close_detail_page__WEBPACK_IMPORTED_MODULE_6__["ViewCloseDetailPage"]
    }
];
var ViewCloseDetailPageModule = /** @class */ (function () {
    function ViewCloseDetailPageModule() {
    }
    ViewCloseDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_view_close_detail_page__WEBPACK_IMPORTED_MODULE_6__["ViewCloseDetailPage"]]
        })
    ], ViewCloseDetailPageModule);
    return ViewCloseDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/view-close-detail/view-close-detail.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/view-close-detail/view-close-detail.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXctY2xvc2UtZGV0YWlsL3ZpZXctY2xvc2UtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/view-close-detail/view-close-detail.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/view-close-detail/view-close-detail.page.ts ***!
  \*******************************************************************/
/*! exports provided: ViewCloseDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCloseDetailPage", function() { return ViewCloseDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


//nuevos


var ViewCloseDetailPage = /** @class */ (function () {
    function ViewCloseDetailPage(router, alertCtrl) {
        this.router = router;
        this.alertCtrl = alertCtrl;
    }
    ViewCloseDetailPage.prototype.ngOnInit = function () {
    };
    ViewCloseDetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    ViewCloseDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-close-detail',
            template: __webpack_require__(/*! raw-loader!./view-close-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/view-close-detail/view-close-detail.page.html"),
            styles: [__webpack_require__(/*! ./view-close-detail.page.scss */ "./src/app/pages/view-close-detail/view-close-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], ViewCloseDetailPage);
    return ViewCloseDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-view-close-detail-view-close-detail-module-es5.js.map