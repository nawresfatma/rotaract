import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembresComponent } from './membres/membres.component';

const routes: Routes = [
  {
    path:"",
    component:MembresComponent
  },
  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
