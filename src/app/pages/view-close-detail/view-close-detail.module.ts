import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewCloseDetailPage } from './view-close-detail.page';


const routes: Routes = [
  {
    path: '',
    component: ViewCloseDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),

  ],
  declarations: [ViewCloseDetailPage]
})
export class ViewCloseDetailPageModule {}
