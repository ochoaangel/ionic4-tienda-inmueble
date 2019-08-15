import { Component, OnInit } from "@angular/core";
//nuevos
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { MyseviceService } from "../../services/mysevice.service";

@Component({
  selector: "app-house-detail",
  templateUrl: "./house-detail.page.html",
  styleUrls: ["./house-detail.page.scss"]
})
export class HouseDetailPage implements OnInit {
  rol: string;
  user: string;
  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private st: Storage,
    private myservicio: MyseviceService // private http: HttpClient
  ) {}

  ngOnInit() {}

  planificarvisita() {
    console.log(this.st.get)
    this.st.get("user").then(valor => {
      if (valor) {
        this.router.navigateByUrl('create-visit')
      } else {
        this.router.navigateByUrl('login')
      }
    });
  } //fin planificarvisita
} // fin clase
