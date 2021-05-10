import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogincomComponent } from './logincom/logincom.component';
import { FormsModule } from '@angular/forms';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';



@NgModule({
  declarations: [
    LogincomComponent,
    LoginuserComponent,
    LoginadminComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginModule { }
