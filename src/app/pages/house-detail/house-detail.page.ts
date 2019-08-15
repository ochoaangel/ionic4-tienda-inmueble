import { Component, OnInit } from '@angular/core';
//nuevos
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.page.html',
  styleUrls: ['./house-detail.page.scss'],
})
export class HouseDetailPage implements OnInit {

  constructor(private router: Router,private alertCtrl: AlertController) { }

  ngOnInit() {
  }

}
