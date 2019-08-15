import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MyseviceService {
  constructor(private httpClient: HttpClient, private st: Storage) {}

  // variables ///////////////////

  urlinmuebles = "http://localhost:8081/user?id=3";

  ////////////////////////////////////////////////////////////////////
  //////////////////////////// API ///////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  public getinmuebles(): void {
    // guardo los inmuebles en storage
    this.httpClient
      .get("http://192.168.16.106:8081/inmuebles")
      .subscribe(data => {
        this.st.set("inmuebles", data);
        console.log("Guardado inmuebles desde Services " + data);
      });
  }
  ////////////////////////////////////////////////////////////////////
  //////////////////////////// GENERAL ///////////////////////////////
  ////////////////////////////////////////////////////////////////////
  public usersigned(): any {
    this.st.get("user").then(valor => {
      if (valor) {
        console.log("Usuario registrado - desde service");
        return true;
      } else {
        console.log("Usuario NO registrado - desde service");
        return false;
      }
    });
  }

  public getemail(): any {
    this.st.get("user").then(valor => {
      if (valor) {
        return valor[0].user;
      } else {
        console.log(valor);
        return 'no hay acceso';
      }
    });
  }

  public getrol(): any {
    this.st.get("user").then(valor => {
      if (valor) {
        return valor[0].rol;
      } else {
        // console.log(valor);
        return 'no hay acceso';
      }
    });
  }
} /////////// fin my service
