import { Component, OnInit } from "@angular/core";
//nuevos
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { MyseviceService } from "../services/mysevice.service";
import { MenuController } from "@ionic/angular";

// import { Observable, of, throwError } from "rxjs";
// import {
// HttpClient,
// HttpHeaders,
// HttpErrorResponse,
// HttpParams
// } from "@angular/common/http";
// import { catchError, tap, map } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private myservicio: MyseviceService, // private http: HttpClient
    private menuController: MenuController
  ) {}
  // url: string = "http://192.168.16.106:8081/user?id=3";
  user: any;
  btniniciar: boolean = true;
  ngOnInit() {
    // console.log('ngOnInit')
  }
  ionViewWillEnter() {
    // console.log(window["user"]);
    console.log("ionViewWillEnter");

    this.user = window["user"];
    if (this.user.length !== 0) {
      this.btniniciar = false;
    } else {
      this.btniniciar = true;
    }
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
  }

}
