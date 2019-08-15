import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewWaitDetailPage } from './view-wait-detail.page';


const routes: Routes = [
  {
    path: '',
    component: ViewWaitDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),

  ],
  declarations: [ViewWaitDetailPage]
})
export class ViewWaitDetailPageModule {}
