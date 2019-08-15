import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewHouseUploadPage } from './new-house-upload.page';

const routes: Routes = [
  {
    path: '',
    component: NewHouseUploadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewHouseUploadPage]
})
export class NewHouseUploadPageModule {}
