import { Component, OnInit } from '@angular/core';
// nuevos
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private http: HttpClient
  ) {}

  usuario = { email: '', password: '', phone: '' };
  error: boolean = false;
  urlbase = 'http://192.168.16.106:8081/register?user=';
  urlpas = '&pass=';
  urlphone = '&phone=';
  ngOnInit() {}

  retorno: any;

  //  urlarmada='http://192.168.16.106:8081/register?user=usuarioo&pass=clave&phone=mitlf'
  urlarmada = '';

  onSubmitTemplate() {
    this.urlarmada =
      this.urlbase +
      this.usuario.email +
      this.urlpas +
      this.usuario.password +
      this.urlphone +
      this.usuario.phone;
    console.log(this.urlarmada);
    this.http.get(this.urlarmada).subscribe(data => {
      this.retorno = data;
      if (!this.retorno.error) {
        this.router.navigateByUrl('login');
      } else {
        this.error = true;
      }

      //     if (data.lenght === 0) {
      //       console.log('no existe el correo en BD, registrandoooo');

      //       //http://192.168.16.106:8081/register?user=usuarioo&pass=clave&phone=mitlf

      // ////////////////////////////////////////
      //             this.http
      // .get('http://192.168.16.106:8081/register?user=' + usuario.email + '&pass=' + usuario.password + '&phone=' + usuario.phone)
      // .subscribe(data => {
      // console.log('ddddddddddddddddddddddddddddddddddddddddddddddddddddd');

      // });
      // ////////////////////////////////////////

      //       this.router.navigate(['/login']);

      //     } else {
      //       this.error = true;
      //     }
    }); // fin subscribe
  }
  // log(this.usuario);
} // fin clase
