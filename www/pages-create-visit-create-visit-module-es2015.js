(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-visit-create-visit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/create-visit/create-visit.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/create-visit/create-visit.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n          Ingresa Datos para la Visita\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n/// link jose https://drive.google.com/open?id=1LGNS90CmPV8BlQ5GIxLytDsNJ6T3cS9B\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Ingresa Datos para la Visita</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>Día 1</ion-card-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h3>\n            <ion-datetime\n              displayFormat=\"DD/MM/YYYY\"\n              placeholder=\"Fecha Aquí\"\n              cancelText=\"Cancelar\"\n              doneText=\"Listo\"\n              mode=\"ios\"\n              [(ngModel)]=\"fechab\"\n            ></ion-datetime>\n          </h3>\n        </ion-col>\n        <ion-col>\n          <ion-grid>\n            <ion-row>\n                <!-- <h3> -->\n              <ion-datetime\n                displayFormat=\"h:mm A\"\n                minuteValues=\"0,15,30,45\"\n                cancelText=\"Cancelar\"\n                doneText=\"Listo\"\n                placeholder=\"Hora Aquí\"\n                mode=\"ios\"\n                [(ngModel)]=\"horab1\"\n              ></ion-datetime>\n              <!-- </h3> -->\n            </ion-row>\n            <ion-row>\n                <!-- <h3> -->\n              <ion-datetime\n                displayFormat=\"h:mm A\"\n                minuteValues=\"0,15,30,45\"\n                cancelText=\"Cancelar\"\n                doneText=\"Listo\"\n                placeholder=\"Hora Aquí\"\n                mode=\"ios\"\n                [(ngModel)]=\"horab2\"\n              ></ion-datetime>\n              <!-- </h3> -->\n            </ion-row>\n            <ion-row>\n                <!-- <h3> -->\n              <ion-datetime\n                displayFormat=\"h:mm A\"\n                minuteValues=\"0,15,30,45\"\n                cancelText=\"Cancelar\"\n                doneText=\"Listo\"\n                placeholder=\"Hora Aquí\"\n                mode=\"ios\"\n                [(ngModel)]=\"horab3\"\n              ></ion-datetime>\n              <!-- </h3> -->\n            </ion-row>\n          </ion-grid>\n        </ion-col> </ion-row\n    ></ion-grid>\n  </ion-card>\n  <!-- ////////// -->\n  <ion-card>\n      <ion-card-content>Día 3</ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <h3>\n              <ion-datetime\n                displayFormat=\"DD/MM/YYYY\"\n                placeholder=\"Fecha Aquí\"\n                cancelText=\"Cancelar\"\n                doneText=\"Listo\"\n                mode=\"ios\"\n                [(ngModel)]=\"fechac\"\n              ></ion-datetime>\n            </h3>\n          </ion-col>\n          <ion-col>\n            <ion-grid>\n              <ion-row>\n                  <!-- <h3> -->\n                <ion-datetime\n                  displayFormat=\"h:mm A\"\n                  minuteValues=\"0,15,30,45\"\n                  cancelText=\"Cancelar\"\n                  doneText=\"Listo\"\n                  placeholder=\"Hora Aquí\"\n                  mode=\"ios\"\n                  [(ngModel)]=\"horaa1\"\n                ></ion-datetime>\n                <!-- </h3> -->\n              </ion-row>\n              <ion-row>\n                  <!-- <h3> -->\n                <ion-datetime\n                  displayFormat=\"h:mm A\"\n                  minuteValues=\"0,15,30,45\"\n                  cancelText=\"Cancelar\"\n                  doneText=\"Listo\"\n                  placeholder=\"Hora Aquí\"\n                  mode=\"ios\"\n                  [(ngModel)]=\"horaa2\"\n                ></ion-datetime>\n                <!-- </h3> -->\n              </ion-row>\n              <ion-row>\n                  <!-- <h3> -->\n                <ion-datetime\n                  displayFormat=\"h:mm A\"\n                  minuteValues=\"0,15,30,45\"\n                  cancelText=\"Cancelar\"\n                  doneText=\"Listo\"\n                  placeholder=\"Hora Aquí\"\n                  mode=\"ios\"\n                  [(ngModel)]=\"horaa3\"\n                ></ion-datetime>\n                <!-- </h3> -->\n              </ion-row>\n            </ion-grid>\n          </ion-col> </ion-row\n      ></ion-grid>\n    </ion-card>\n    <!-- //////// -->\n    <ion-card>\n        <ion-card-content>Día 1</ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <h3>\n                <ion-datetime\n                  displayFormat=\"DD/MM/YYYY\"\n                  placeholder=\"Fecha Aquí\"\n                  cancelText=\"Cancelar\"\n                  doneText=\"Listo\"\n                  mode=\"ios\"\n                  [(ngModel)]=\"fechaa\"\n                ></ion-datetime>\n              </h3>\n            </ion-col>\n            <ion-col>\n              <ion-grid>\n                <ion-row>\n                    <!-- <h3> -->\n                  <ion-datetime\n                    displayFormat=\"h:mm A\"\n                    minuteValues=\"0,15,30,45\"\n                    cancelText=\"Cancelar\"\n                    doneText=\"Listo\"\n                    placeholder=\"Hora Aquí\"\n                    mode=\"ios\"\n                    [(ngModel)]=\"horab1\"\n                  ></ion-datetime>\n                  <!-- </h3> -->\n                </ion-row>\n                <ion-row>\n                    <!-- <h3> -->\n                  <ion-datetime\n                    displayFormat=\"h:mm A\"\n                    minuteValues=\"0,15,30,45\"\n                    cancelText=\"Cancelar\"\n                    doneText=\"Listo\"\n                    placeholder=\"Hora Aquí\"\n                    mode=\"ios\"\n                    [(ngModel)]=\"horab2\"\n                  ></ion-datetime>\n                  <!-- </h3> -->\n                </ion-row>\n                <ion-row>\n                    <!-- <h3> -->\n                  <ion-datetime\n                    displayFormat=\"h:mm A\"\n                    minuteValues=\"0,15,30,45\"\n                    cancelText=\"Cancelar\"\n                    doneText=\"Listo\"\n                    placeholder=\"Hora Aquí\"\n                    mode=\"ios\"\n                    [(ngModel)]=\"horab3\"\n                  ></ion-datetime>\n                  <!-- </h3> -->\n                </ion-row>\n              </ion-grid>\n            </ion-col> </ion-row\n        ></ion-grid>\n      </ion-card>\n  <ion-button expand=\"full\" (click)='GuardarCita()'>Guardar Cita</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/create-visit/create-visit.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/create-visit/create-visit.module.ts ***!
  \***********************************************************/
/*! exports provided: CreateVisitPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVisitPageModule", function() { return CreateVisitPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_visit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-visit.page */ "./src/app/pages/create-visit/create-visit.page.ts");







const routes = [
    {
        path: "",
        component: _create_visit_page__WEBPACK_IMPORTED_MODULE_6__["CreateVisitPage"]
    }
];
let CreateVisitPageModule = class CreateVisitPageModule {
};
CreateVisitPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_create_visit_page__WEBPACK_IMPORTED_MODULE_6__["CreateVisitPage"]]
    })
], CreateVisitPageModule);



/***/ }),

/***/ "./src/app/pages/create-visit/create-visit.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/create-visit/create-visit.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS12aXNpdC9jcmVhdGUtdmlzaXQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/create-visit/create-visit.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/create-visit/create-visit.page.ts ***!
  \*********************************************************/
/*! exports provided: CreateVisitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVisitPage", function() { return CreateVisitPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


//nuevos


let CreateVisitPage = class CreateVisitPage {
    constructor(router, alertCtrl) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.fechaa = "Fecha 1";
        this.fechab = "Fecha 2";
        this.fechac = "Fecha 3";
        this.horaa1 = "Hora A";
        this.horaa2 = "Hora B";
        this.horaa3 = "Hora C";
        this.horab1 = "Hora A";
        this.horab2 = "Hora B";
        this.horab3 = "Hora C";
        this.horac1 = "Hora A";
        this.horac2 = "Hora B";
        this.horac3 = "Hora C";
    }
    ngOnInit() { }
    GuardarCita() {
        console.log(this.fechaa + ' ' + this.fechab + ' ' + this.fechac + ' ');
    }
};
CreateVisitPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
CreateVisitPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-create-visit",
        template: __webpack_require__(/*! raw-loader!./create-visit.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/create-visit/create-visit.page.html"),
        styles: [__webpack_require__(/*! ./create-visit.page.scss */ "./src/app/pages/create-visit/create-visit.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], CreateVisitPage);



/***/ })

}]);
//# sourceMappingURL=pages-create-visit-create-visit-module-es2015.js.map