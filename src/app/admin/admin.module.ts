import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincomComponent } from './admincom/admincom.component';
import {FormsModule} from '@angular/forms';
import { EmpdisplayComponent } from './empdisplay/empdisplay.component';



@NgModule({
  declarations: [
    AdmincomComponent,
    EmpdisplayComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
