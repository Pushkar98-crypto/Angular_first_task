import { Component, OnInit } from '@angular/core';

import {Router} from  '@angular/router';
import { AuthserviceService } from '../../auth/authservice.service'

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  constructor(private authService:AuthserviceService, private router:Router) { }

  
  public email:any;
  public pass:any;
  public id:any;
  employeeInfo=[];

  ngOnInit(): void {
  }
  
   userlogin()
   {
    if(this.authService.userlogin(this.email,this.pass,this.id))
    {
      this.router.navigate(['userlogin/emp/'+`${this.id}`])
      localStorage.setItem('tokenForid','allowed')
       
    }
    
   }

}
