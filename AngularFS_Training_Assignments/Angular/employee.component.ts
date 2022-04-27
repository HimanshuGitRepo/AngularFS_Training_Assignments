import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{

  public eid:number = 54654564
  public ename:string  = "Stephen";
  public ejob:string  = "Manager";
  public esalary:number  = 75000
  public edepo:number  = 10

}
