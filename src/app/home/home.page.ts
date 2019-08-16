import { Component, OnInit } from "@angular/core";
// nuevos
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { MyseviceService } from "../services/mysevice.service";
import { MenuController } from "@ionic/angular";
import { Storage } from "@ionic/storage";

//
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
    private menuController: MenuController,
    private st: Storage
  ) {}
  // url: string = "http://192.168.16.106:8081/user?id=3";

  user: any;
  usersigned = false;
  email: string;
  inmuebles: any;
  urlimage = "http://192.168.16.106:8081/Images/Inmuebles/";

  ngOnInit() {
    console.log("ngOnInit desde home solo la primera ves...");
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter desde home");
    this.st.get("inmuebles").then(val => {
      this.inmuebles = val;
      console.log(this.inmuebles);
    });

    this.st.get("user").then(val => {
      console.log(val);
      if (val) {
        console.log("antes de entrar con usuario definido");
        this.usersigned = true;
        this.email = val[0].user;
      } else {
        console.log("antes de entrar SIN usuario definido");
        this.usersigned = false;
      }
    });
  }

  cerrarsesion() {
    this.st.remove("user");
    this.router.navigateByUrl("login");
    console.log("dffffffffffffffffffffffffffffffffffffff");
  }

  detalleinmueble(ninmueble: number) {
    this.st.get("inmuebles").then(inmuebles => {
      const result = inmuebles.filter(cinmueble => cinmueble.id === ninmueble);
      this.st.set("inmueble", result[0]);
      console.log('redirigiendo de hom a home-detail, se guardo en el storage');
      this.router.navigateByUrl("house-detail");
    });

  }
}
