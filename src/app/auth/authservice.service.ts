import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  adminlogin(email: any, pass: any): any{
    if(email== "iamadmin" && pass== "admin@1234" )
    {
      localStorage.setItem('tokenForAdmin','allowed')
      return true
    }
    else{
      this.router.navigateByUrl('adminlogin')
      return false
    }


  }
  public empinfo=[]
  userlogin(mail: any,passw:any,id:any)
  {
    this.empinfo=JSON.parse(localStorage.getItem('data'))
    for(var i=0;i<this.empinfo.length;i++)
    {
      if(this.empinfo[i].email==mail  && this.empinfo[i].pass==passw && this.empinfo[i].empid==id)
      {
        localStorage.setItem('tokenForUser','allowed')
        return true;
      }
      else{
        this.router.navigateByUrl('userlogin')
        return false
      }
    }
    

  }

  constructor( private router:Router) { }
}
