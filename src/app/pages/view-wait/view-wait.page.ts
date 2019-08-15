import { Component, OnInit } from '@angular/core';
//nuevos
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-wait',
  templateUrl: './view-wait.page.html',
  styleUrls: ['./view-wait.page.scss'],
})
export class ViewWaitPage implements OnInit {

  constructor(private router: Router,private alertCtrl: AlertController) { }

  ngOnInit() {
  }

}
