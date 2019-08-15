import { Component, OnInit } from '@angular/core';
//nuevos
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-open-detail',
  templateUrl: './view-open-detail.page.html',
  styleUrls: ['./view-open-detail.page.scss'],
})
export class ViewOpenDetailPage implements OnInit {

  constructor(private router: Router,private alertCtrl: AlertController) { }

  ngOnInit() {
  }

}
