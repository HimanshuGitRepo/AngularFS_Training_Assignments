import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  start:number = 0;
  end:number = 4 ;


  public empsArray:any[] = [
    {"empno":6589,"ename":"SRIRAM","pgrade":1,"job":"MANAGER","sal":3200,"deptno":10},
    {"empno":6369,"ename":"SMITH","pgrade":3,"job":"CLERK","sal":800,"deptno":10},
    {"empno":6499,"ename":"ALLEN","pgrade":3,"job":"SALESMAN","sal":1600,"deptno":10},
    {"empno":6521,"ename":"WARD","pgrade":2,"job":"ANALYST","sal":1250,"deptno":10},
    {"empno":6566,"ename":"JONES","pgrade":1,"job":"MANAGER","sal":2975,"deptno":10},
    {"empno":7654,"ename":"MARTIN","pgrade":4,"job":"SALESMAN","sal":1250,"deptno":20},
    {"empno":7698,"ename":"BLAKE","pgrade":2,"job":"MANAGER","sal":2850,"deptno":20},
    {"empno":7782,"ename":"CLARK","pgrade":1,"job":"MANAGER","sal":2450,"deptno":20},
    {"empno":7839,"ename":"KING","pgrade":3,"job":"PRESIDENT","sal":5000,"deptno":20},
    {"empno":7844,"ename":"TURNER","pgrade":4,"job":"SALESMAN","sal":1500,"deptno":20},
    {"empno":7876,"ename":"ADAMS","pgrade":1,"job":"CLERK","sal":1100,"deptno":30},
    {"empno":8900,"ename":"JAMES","pgrade":3,"job":"CLERK","sal":950,"deptno":30},
    {"empno":8902,"ename":"FORD","pgrade":2,"job":"ANALYST","sal":3000,"deptno":30},
    {"empno":8545,"ename":"KIRAN","pgrade":1,"job":"MANAGER","sal":5890,"deptno":30},
    {"empno":8844,"ename":"TURNER","pgrade":4,"job":"SALESMAN","sal":1500,"deptno":30},
    {"empno":8876,"ename":"ADAMS","pgrade":2,"job":"CLERK","sal":1100,"deptno":40},
    {"empno":9900,"ename":"JAMES","pgrade":3,"job":"CLERK","sal":950,"deptno":40},
    {"empno":9902,"ename":"FORD","pgrade":1,"job":"ANALYST","sal":3000,"deptno":40},
    {"empno":9545,"ename":"KIRAN","pgrade":2,"job":"MANAGER","sal":5890,"deptno":40},
    {"empno":9589,"ename":"SRIRAM","pgrade":1,"job":"MANAGER","sal":3200,"deptno":40},
    {"empno":9369,"ename":"SMITH","pgrade":3,"job":"CLERK","sal":800,"deptno":50},
    {"empno":9499,"ename":"ALLEN","pgrade":2,"job":"SALESMAN","sal":1600,"deptno":50},
    ];

    nextItems_click()
    {
      if(this.end >= this.empsArray.length)
      {
        this.start = 0;
        this.end = 4;
      }
      else
      {
        this.end = this.end + 4;
      }
    }

}
