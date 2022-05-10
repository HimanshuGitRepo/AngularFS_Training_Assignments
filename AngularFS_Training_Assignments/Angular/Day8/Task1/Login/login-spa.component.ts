import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-spa',
  templateUrl: './login-spa.component.html',
  styleUrls: ['./login-spa.component.css']
})
export class LoginSPAComponent implements OnInit {

  uid:string = "admin@gmail.com";
   pwd:string = "admin123";

  constructor() { }

  ngOnInit(): void {
  }

}
