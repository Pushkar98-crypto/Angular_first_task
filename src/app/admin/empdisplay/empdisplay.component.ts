import { JsonPipe } from '@angular/common';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-empdisplay',
  templateUrl: './empdisplay.component.html',
  styleUrls: ['./empdisplay.component.css']
})
export class EmpdisplayComponent implements OnInit {

  constructor(private activatedRoute :ActivatedRoute) { }

  public nam:any;
  public mail:any;
  public id:any;
  public desig:any;
  public passw:any;
  public tempdata=[];
  public visitedid:any;
  public specificdata=[];
  public employeeInfo=[];
  public isvisible:boolean=false;
  
  

  ngOnInit(): void {
    this.tempdata=JSON.parse(localStorage.getItem('data'));
    this.accessroutes()
  //  this.show()
   
    
    
  }

  accessroutes()
  {
    this.activatedRoute.params.subscribe((data)=>
    {
           this.visitedid=data.id;
          for(let i=0;i<this.tempdata.length;i++)
          {
            if(this.tempdata[i].empid==data.id)
            {
            this.specificdata.push(this.tempdata[i])
            console.log(this.specificdata);
            this.nam=this.tempdata[i].name
            this.mail=this.tempdata[i].email
            this.id=this.tempdata[i].empid
            this.desig=this.tempdata[i].des 
            this.passw=this.tempdata[i].pass
          
          }
          
          }
         
        
          

    })
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
    localStorage.setItem('data',JSON.stringify(this.employeeInfo));
  
  }

  showupdate()
  {
    this.isvisible=true;
  }
  
   
  
}
