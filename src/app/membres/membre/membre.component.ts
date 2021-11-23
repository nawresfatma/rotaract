import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MembreService } from '../../shared/membre.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private service: MembreService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      $key: new FormControl(null),
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
      city: new FormControl(''),
      gender: new FormControl('1'),
      department: new FormControl(0),
      isPermanent: new FormControl(false)
    });
  }


  logFormValues() {
    console.log(this.form.value)
  }

  onClear() {
    this.form.reset();
  }
}