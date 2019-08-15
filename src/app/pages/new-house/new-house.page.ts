import { Component, OnInit } from '@angular/core';
//nuevos
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.page.html',
  styleUrls: ['./new-house.page.scss'],
})
export class NewHousePage implements OnInit {

  constructor(private router: Router,private alertCtrl: AlertController) { }

  ngOnInit() {
  }

}
