import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeecomComponent } from './employeecom/employeecom.component';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    EmployeecomComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EmployeeModule { }
