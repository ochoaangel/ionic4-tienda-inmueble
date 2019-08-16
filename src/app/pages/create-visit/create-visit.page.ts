import { Component, OnInit } from "@angular/core";
//nuevos
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-create-visit",
  templateUrl: "./create-visit.page.html",
  styleUrls: ["./create-visit.page.scss"]
})
export class CreateVisitPage implements OnInit {
  fechaa = "Fecha 1";
  fechab = "Fecha 2";
  fechac = "Fecha 3";
  horaa1 = "Hora A";
  horaa2 = "Hora B";
  horaa3 = "Hora C";
  horab1 = "Hora A";
  horab2 = "Hora B";
  horab3 = "Hora C";
  horac1 = "Hora A";
  horac2 = "Hora B";
  horac3 = "Hora C";


  constructor(private router: Router, private alertCtrl: AlertController) {
    

  }


  ngOnInit() {}

  GuardarCita(){
    console.log(this.fechaa+' '+this.fechab+' '+this.fechac+' ')
  }
}
