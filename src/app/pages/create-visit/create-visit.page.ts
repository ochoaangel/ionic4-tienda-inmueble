import { Component, OnInit } from '@angular/core';
//nuevos
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.page.html',
  styleUrls: ['./create-visit.page.scss'],
})
export class CreateVisitPage implements OnInit {

  constructor(private router: Router,private alertCtrl: AlertController) { }

  ngOnInit() {
  }

}
