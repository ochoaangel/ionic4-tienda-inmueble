import { Component, OnInit } from '@angular/core';
//nuevos
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-close',
  templateUrl: './view-close.page.html',
  styleUrls: ['./view-close.page.scss'],
})
export class ViewClosePage implements OnInit {

  constructor(private router: Router,private alertCtrl: AlertController) { }

  ngOnInit() {
  }

}
