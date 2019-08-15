import { Component, OnInit } from "@angular/core";
//nuevos
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    public http: HttpClient,
    private st: Storage
  ) {}
  usuario = { email: "", password: "" };
  // url='http://localhost:8081/confirm?user=user03&pass=pass03';
  urlbase = "http://localhost:8081/confirm?user=";
  urlpas = "&pass=";
  error: boolean = false;
  mydata: any;
  ngOnInit() {}

  onSubmitTemplate() {
    this.http
      .get(this.urlbase + this.usuario.email + this.urlpas + this.usuario.password)
      .subscribe(data => {
        this.mydata = data;
        if (this.mydata.length > 0) {
          console.log("usuario correcto");
          this.st.set("user", data);
          console.log("usuario guardado desde Login");
          this.router.navigate(["/"]);
        } else {
          this.error = true;
        }
      });
  }
}
