import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admincom',
  templateUrl: './admincom.component.html',
  styleUrls: ['./admincom.component.css']
})
export class AdmincomComponent implements OnInit {


  public nam:any;
  public mail:any;
  public id:any;
  public desig:any;
  public passw:any;
  public visible:boolean;

  

 empdetails:any=[
    {
      name:'Rohit Mehra',
      email:'mehra@gmail.com',
      empid:101,
      des:'Associate Developer',
      pass:'rohit.mehra'
    },
    {
      name:'Jack Ryan',
      email:'jack@gmail.com',
      empid:102,
      des:'Sr.Developer',
      pass:'jack.rayn'
    },
    {
      name:'Mike Ross',
      email:'ross@gmail.com',
      empid:103,
      des:'Jr. developer',
      pass:'mike.ross'
    },
    {
      name:'Harvey Sepecter',
      email:'har@gmail.com',
      empid:104,
      des:'Sr. developer',
      pass:'harvey.specter'
    },
    {
      name:'Willam Alex',
      email:'alex@gmail.com',
      empid:105,
      des:'HR Execituve',
      pass:'william.alex'
    }
  ];
   
  
  employeeInfo=[]
  constructor(private router :Router) { }

  ngOnInit(): void {
    this.visible=true;
  
   if (!(localStorage.getItem('data')))
   {
   localStorage.setItem('data',JSON.stringify(this.empdetails));
   }
   
   this.employeeInfo=JSON.parse(localStorage.getItem('data'));
   
  
  }

  adddata()
  {
    let newinfo={
      'name':this.nam,'email':this.mail,'empid':this.id,'des':this.desig,'pass':this.passw
    };
    this.empdetails.push(newinfo)
    this.employeeInfo.push(newinfo)
    localStorage.setItem('data', JSON.stringify(this.empdetails));
  
  }
  delete(item)
  {
    this.employeeInfo.splice(item,1);
    localStorage.setItem('data',JSON.stringify(this.employeeInfo));
  }

  edit(index){
    this.employeeInfo=JSON.parse(localStorage.getItem('data'));
    this.nam=this.employeeInfo[index].name
    this.mail=this.employeeInfo[index].email
    this.id=this.employeeInfo[index].empid
    this.desig=this.employeeInfo[index].des
    this.passw=this.employeeInfo[index].pass
    
    this.visible=false;
  }

   updating(id)
   {
    this.employeeInfo=JSON.parse(localStorage.getItem('data'));
    console.log(id);
    for(var i=0;i<this.employeeInfo.length;i++)
    {
      if(this.employeeInfo[i].empid===id)
      {
        this.employeeInfo[i].name=this.nam
        this.employeeInfo[i].email=this.mail
        this.employeeInfo[i].des=this.desig
       

      }
    }
    
    localStorage.setItem('data', JSON.stringify(this.employeeInfo));
    this.visible=true;
    
   }

   send(val)
   {
     console.log("coming");
      this.router.navigate(['adminlogin/admin/empdis/'+`${val.empid}`])
   }



}
