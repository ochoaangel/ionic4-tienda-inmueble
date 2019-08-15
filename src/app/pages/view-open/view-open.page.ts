import { Component, OnInit } from '@angular/core';
//nuevos
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-open',
  templateUrl: './view-open.page.html',
  styleUrls: ['./view-open.page.scss'],
})
export class ViewOpenPage implements OnInit {

  constructor(private router: Router,private alertCtrl: AlertController) { }

  ngOnInit() {
  }

}
