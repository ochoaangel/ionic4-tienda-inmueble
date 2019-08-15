import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { CreateVisitPage } from "./create-visit.page";


const routes: Routes = [
  {
    path: "",
    component: CreateVisitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),

  ],
  declarations: [CreateVisitPage]
})
export class CreateVisitPageModule {}
