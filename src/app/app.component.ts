import { Component, OnInit } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Storage } from "@ionic/storage";
import { MyseviceService } from "./services/mysevice.service";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent implements OnInit {
  // user: any;
  user = window["user"];
  btniniciar: boolean = true;
  email: string = "Usuario";

  ngOnInit() {
    console.log("ngOnInit desde app.components solo la primera ves...");
    this.myservicio.getinmuebles();
    console.log("cargando inmuebels");
  }
  // tslint:disable-next-line: member-ordering
  public appPages = [
    {
      title: "Catalogo de Inmuebles",
      url: "/home",
      icon: "images"
    },
    {
      title: "Visitas Propuestas",
      url: "/view-open",
      icon: "copy"
    },
    {
      title: "Visitas en Espera",
      url: "/view-wait",
      icon: "clock"
    },
    {
      title: "Visitas en Confirmadas",
      url: "/view-close",
      icon: "checkmark-circle"
    },
    {
      title: "Publicar Inmueble",
      url: "/new-house",
      icon: "cloud-upload"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public http: HttpClient,
    private st: Storage,
    private myservicio: MyseviceService // private http: HttpClient
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // ionViewDidEnter(){console.log('ionViewDidEnter')}
  actualizarmenu() {
    console.log(this.user);
  }
}
