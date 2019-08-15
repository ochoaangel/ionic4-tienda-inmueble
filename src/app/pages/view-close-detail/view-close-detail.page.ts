import { Component, OnInit } from '@angular/core';
//nuevos
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-close-detail',
  templateUrl: './view-close-detail.page.html',
  styleUrls: ['./view-close-detail.page.scss'],
})
export class ViewCloseDetailPage implements OnInit {

  constructor(private router: Router,private alertCtrl: AlertController) { }

  ngOnInit() {
  }

}
