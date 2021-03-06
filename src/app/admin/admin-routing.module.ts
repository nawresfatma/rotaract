import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembresComponent } from '../membres/membres.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      { path: '', redirectTo: 'admin/membre', pathMatch: 'full' },
      {
        path: 'membre',
        component: MembresComponent
      }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
