(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Catalogo de Inmuebles\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-button expand=\"full\" routerLink=\"/login\" *ngIf=\"!usersigned\">\n  Bienvenido... Inicia Sesión..</ion-button\n>\n<ion-content>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-button expand=\"full\" *ngIf=\"usersigned\" (click)=\"cerrarsesion()\"\n      >Cierra Sesión</ion-button\n    >\n    <ion-label *ngIf=\"usersigned\">Bienvenido {{ email }}</ion-label>\n  </ion-row>\n  <!-- ooooooooooooooooooooooooooooooooBUCLEoooooooooooooooooooooooooooooooo -->\n  <ion-card\n    class=\"welcome-card\"\n    *ngFor=\"let inmueble of inmuebles\"\n    (click)=\"detalleinmueble(inmueble.id)\"\n  >\n    <img src=\"{{ urlimage + inmueble.pics[0] + '.jpg' }}\" />\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"10\">\n          <ion-card-title>{{inmueble.name}}</ion-card-title>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"play\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <!-- ooooooooooooooooooooooooooooooooFIN BUCLEoooooooooooooooooooooooooooooooo -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: "",
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ]),
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHRlbXBcXERvY3VtZW50c1xcR2l0SHViXFxpb25pYzQtdGllbmRhLWlubXVlYmxlL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_mysevice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/mysevice.service */ "./src/app/services/mysevice.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");


// nuevos





//
var HomePage = /** @class */ (function () {
    function HomePage(router, alertCtrl, myservicio, // private http: HttpClient
    menuController, st) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.myservicio = myservicio;
        this.menuController = menuController;
        this.st = st;
        this.usersigned = false;
        this.urlimage = "http://192.168.16.106:8081/Images/Inmuebles/";
    }
    HomePage.prototype.ngOnInit = function () {
        console.log("ngOnInit desde home solo la primera ves...");
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("ionViewWillEnter desde home");
        this.st.get("inmuebles").then(function (val) {
            _this.inmuebles = val;
            console.log(_this.inmuebles);
        });
        this.st.get("user").then(function (val) {
            console.log(val);
            if (val) {
                console.log("antes de entrar con usuario definido");
                _this.usersigned = true;
                _this.email = val[0].user;
            }
            else {
                console.log("antes de entrar SIN usuario definido");
                _this.usersigned = false;
            }
        });
    };
    HomePage.prototype.cerrarsesion = function () {
        this.st.remove("user");
        this.router.navigateByUrl("login");
        console.log("dffffffffffffffffffffffffffffffffffffff");
    };
    HomePage.prototype.detalleinmueble = function (ninmueble) {
        var _this = this;
        this.st.get("inmuebles").then(function (inmuebles) {
            var result = inmuebles.filter(function (cinmueble) { return cinmueble.id === ninmueble; });
            _this.st.set("inmueble", result[0]);
            console.log('redirigiendo de hom a home-detail, se guardo en el storage');
            _this.router.navigateByUrl("house-detail");
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _services_mysevice_service__WEBPACK_IMPORTED_MODULE_4__["MyseviceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _services_mysevice_service__WEBPACK_IMPORTED_MODULE_4__["MyseviceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map