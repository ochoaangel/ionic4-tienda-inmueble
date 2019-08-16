import { Component, OnInit } from "@angular/core";
// nuevos
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { MyseviceService } from "../../services/mysevice.service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-house-detail",
  templateUrl: "./house-detail.page.html",
  styleUrls: ["./house-detail.page.scss"]
})
export class HouseDetailPage implements OnInit {
  rol: string;
  user: string;
  public inmueble: any;
  public prueba = "varhbthathasrtjjts";
  public titulox = "mititulo";
  public urlimage = "http://192.168.16.106:8081/Images/Inmuebles/";

  name = "";
  place = ""; //
  pics = '';
  active = "";
  price = ""; //
  type = ""; //
  areat = ""; //
  areac = ""; //
  bedroom = ""; //..
  bathroom = ""; //
  antiquity = ""; //
  floors = "";
  parking = "";
  description = ""; //

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private st: Storage,
    private myservicio: MyseviceService // private http: HttpClient
  ) {}
  ngOnInit() {  }

  planificarvisita() {
    // console.log(this.st.get)
    this.st.get("user").then(valor => {
      if (valor) {
        this.router.navigateByUrl("create-visit");
      } else {
        this.router.navigateByUrl("login");
      }
    });
  } // fin planificarvisita

  ionViewWillEnter() {  }
  ionViewDidEnter() {
    console.log("ya entre alhouse-detail");
    this.st.get("inmueble").then(inmueblen => {
      if (inmueblen) {
        this.inmueble = inmueblen;
        this.name = inmueblen.name;
        this.place = inmueblen.place;
        this.pics = inmueblen.pics[0];
        this.active = inmueblen.active;
        this.price = inmueblen.price;
        this.type = inmueblen.type;
        this.areat = inmueblen.areat;
        this.areac = inmueblen.areac;
        this.bedroom = inmueblen.bedroom;
        this.bathroom = inmueblen.bathroom;
        this.antiquity = inmueblen.antiquity;
        this.bathroom = inmueblen.bathroom;
        this.floors = inmueblen.floors;
        this.parking = inmueblen.parking;
        this.description = inmueblen.description;
      } else {
        console.log(
          "desde house-detail se detecta que no hay inmueble elegido para detalle en el storage"
        );
        this.router.navigateByUrl("home");
      }
    });
  }

  ionViewDidLeave() {
    this.st.remove("inmueble");
  }
} // fin clase
