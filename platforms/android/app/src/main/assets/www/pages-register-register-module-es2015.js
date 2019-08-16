(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Bienvenid@ a nuesta APP..\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <form #formulario=\"ngForm\" (ngSubmit)=\"onSubmitTemplate()\">\n        <ion-list>\n          <ion-item>\n              <ion-grid *ngIf=\"error\"\n              ><ion-row justify-content-center align-items-center\n                >Ya existe ese usuario</ion-row\n              ></ion-grid>\n          </ion-item>\n          <ion-item>\n\n            <ion-label position=\"floating\"\n              >Ingrese su Usuario (Correo)</ion-label>\n\n            <ion-input\n              required\n              clearInput\n              type=\"email\"\n              name=\"email\"\n              [(ngModel)]=\"usuario.email\"\n              placeholder=\"tu_correo@correo.com\"\n              pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\n            ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Ingrese su Contraseña</ion-label>\n            <ion-input\n              required\n              clearInput\n              type=\"password\"\n              name=\"password\"\n              [(ngModel)]=\"usuario.password\"\n              placeholder=\"Contraseña\"\n              pattern=\"^([a-zA-Z0-9_\\-\\.]{5,20})$\"\n            ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\"\n              >Ingrese nu número Telefónico</ion-label\n            >\n            <ion-input\n              required\n              clearInput\n              type=\"numeric\"\n              name=\"phone\"\n              [(ngModel)]=\"usuario.phone\"\n              placeholder=\"5804001112233\"\n              pattern=\"^([0-9]{11,18})$\"\n            ></ion-input>\n          </ion-item>\n        </ion-list>\n        <ion-button expand=\"full\" type=\"submit\" [disabled]=\"formulario.invalid\"\n          >Registrarse</ion-button\n        >\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");







const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


// nuevos



let RegisterPage = class RegisterPage {
    constructor(router, alertCtrl, http) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.usuario = { email: '', password: '', phone: '' };
        this.error = false;
        this.urlbase = 'http://192.168.16.106:8081/register?user=';
        this.urlpas = '&pass=';
        this.urlphone = '&phone=';
        //  urlarmada='http://192.168.16.106:8081/register?user=usuarioo&pass=clave&phone=mitlf'
        this.urlarmada = '';
    }
    ngOnInit() { }
    onSubmitTemplate() {
        this.urlarmada =
            this.urlbase +
                this.usuario.email +
                this.urlpas +
                this.usuario.password +
                this.urlphone +
                this.usuario.phone;
        console.log(this.urlarmada);
        this.http.get(this.urlarmada).subscribe(data => {
            this.retorno = data;
            if (!this.retorno.error) {
                this.router.navigateByUrl('login');
            }
            else {
                this.error = true;
            }
            //     if (data.lenght === 0) {
            //       console.log('no existe el correo en BD, registrandoooo');
            //       //http://192.168.16.106:8081/register?user=usuarioo&pass=clave&phone=mitlf
            // ////////////////////////////////////////
            //             this.http
            // .get('http://192.168.16.106:8081/register?user=' + usuario.email + '&pass=' + usuario.password + '&phone=' + usuario.phone)
            // .subscribe(data => {
            // console.log('ddddddddddddddddddddddddddddddddddddddddddddddddddddd');
            // });
            // ////////////////////////////////////////
            //       this.router.navigate(['/login']);
            //     } else {
            //       this.error = true;
            //     }
        }); // fin subscribe
    }
}; // fin clase
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module-es2015.js.map