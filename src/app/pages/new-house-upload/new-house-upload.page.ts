import { Component, OnInit } from '@angular/core';
//nuevos
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-new-house-upload',
  templateUrl: './new-house-upload.page.html',
  styleUrls: ['./new-house-upload.page.scss'],
})
export class NewHouseUploadPage implements OnInit {

  constructor(private router: Router,private alertCtrl: AlertController) { }

  ngOnInit() {
  }

}
