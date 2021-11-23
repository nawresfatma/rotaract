import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MembresComponent } from '../membres/membres.component';
import { MembreComponent } from '../membres/membre/membre.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon"
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatButtonModule } from "@angular/material/button"
import { MatSnackBarModule } from "@angular/material/snack-bar"
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from "@angular/material/sort"
import { MatDialogModule } from "@angular/material/dialog";


@NgModule({
  declarations: [
    SidenavComponent, MembresComponent, MembreComponent
  ],
  imports: [
    CommonModule,
    MatSortModule, MatPaginatorModule, MatTableModule, MatSnackBarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule,

    ReactiveFormsModule,
    HttpClientModule, AdminRoutingModule, MatDialogModule,
    FormsModule,
  ]
})
export class AdminModule { }
