import { Component, OnInit } from "@angular/core";
//nuevos
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    public http: HttpClient
  ) {}
  usuario = { email: "", password: "" };
  // url='http://localhost:8081/confirm?user=user03&pass=pass03';
  urlbase = "http://localhost:8081/confirm?user=";
  urlpas = "&pass=";
  error: boolean = false;
  mydata: any;
  ngOnInit() {}

  onSubmitTemplate() {
    console.log(this.usuario);
    //mandado datos para  confirmar usuario
    this.http
      .get(
        this.urlbase + this.usuario.email + this.urlpas + this.usuario.password
      )
      .subscribe(data => {
        this.mydata = data;
        if (this.mydata.length > 0) {
          console.log("usuario correcto");
          window["user"] = this.mydata;
          console.log("usuario guardado global");
          console.log(window["user"]);
          // window.location.reload()
          this.router.navigate(["/"]);
        } else {
          this.error = true;
        }
      });
  }

  ngOnDestroy() {
    console.log("saliendoooooooooooooooo");
  }
}
