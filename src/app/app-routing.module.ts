import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "list",
    loadChildren: () => import("./list/list.module").then(m => m.ListPageModule)
  },
  {
    path: "house-detail",
    loadChildren:
      "./pages/house-detail/house-detail.module#HouseDetailPageModule"
  },
  { path: "login", loadChildren: "./pages/login/login.module#LoginPageModule" },
  {
    path: "register",
    loadChildren: "./pages/register/register.module#RegisterPageModule"
  },
  {
    path: "view-open",
    loadChildren: "./pages/view-open/view-open.module#ViewOpenPageModule"
  },
  {
    path: "view-open-detail",
    loadChildren:
      "./pages/view-open-detail/view-open-detail.module#ViewOpenDetailPageModule"
  },
  {
    path: "view-wait",
    loadChildren: "./pages/view-wait/view-wait.module#ViewWaitPageModule"
  },
  {
    path: "view-wait-detail",
    loadChildren:
      "./pages/view-wait-detail/view-wait-detail.module#ViewWaitDetailPageModule"
  },
  {
    path: "view-close",
    loadChildren: "./pages/view-close/view-close.module#ViewClosePageModule"
  },
  {
    path: "view-close-detail",
    loadChildren:
      "./pages/view-close-detail/view-close-detail.module#ViewCloseDetailPageModule"
  },
  {
    path: "create-visit",
    loadChildren:
      "./pages/create-visit/create-visit.module#CreateVisitPageModule"
  },
  {
    path: "new-house",
    loadChildren: "./pages/new-house/new-house.module#NewHousePageModule"
  },
  {
    path: "new-house-upload",
    loadChildren:
      "./pages/new-house-upload/new-house-upload.module#NewHouseUploadPageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
