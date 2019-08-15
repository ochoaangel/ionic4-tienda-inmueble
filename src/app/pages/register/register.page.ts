import { Component, OnInit } from "@angular/core";
//nuevos
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  constructor(private router: Router,private alertCtrl: AlertController) {}

  usuario = { email: "", password: "", password2: "" };
  ngOnInit() {}

  // confirm: Boolean = false;

// if(this.usuario.password !=== usuario.password2){this.confirm=true;}

onSubmitTemplate() {

    console.log(this.usuario);
  }
}
