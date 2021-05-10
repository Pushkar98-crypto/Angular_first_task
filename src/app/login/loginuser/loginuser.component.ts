import { Component, OnInit } from '@angular/core';
import {AuthserviseService } from 'auth/authservice.service';
import {Router} from  '@angular/router';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  constructor(private authService:AuthserviseService, private router:Router) { }

  
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
   
    }
    
   }

}
