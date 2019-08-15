import { Component, OnInit } from '@angular/core';
//nuevos
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-wait-detail',
  templateUrl: './view-wait-detail.page.html',
  styleUrls: ['./view-wait-detail.page.scss'],
})
export class ViewWaitDetailPage implements OnInit {

  constructor(private router: Router,private alertCtrl: AlertController) { }

  ngOnInit() {
  }

}
