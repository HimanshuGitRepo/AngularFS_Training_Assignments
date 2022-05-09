import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-car-model-driven',
  templateUrl: './car-model-driven.component.html',
  styleUrls: ['./car-model-driven.component.css']
})
export class CarModelDrivenComponent implements OnInit {

  carRegistrationForm:FormGroup = new FormGroup({
    oname : new FormControl("", Validators.required),
    cnumber : new FormControl("", [Validators.required, Validators.pattern("\\10")]),
    email : new FormControl("",  Validators.email),
    vrn: new FormControl("", [Validators.required, Validators.pattern('^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{1,4}$')]),
    address: new FormControl("", Validators.required),
    model : new FormControl("", [Validators.required,Validators.minLength(10)]),
    color: new FormControl("", Validators.required),
    year: new FormControl("", [Validators.minLength(2012), Validators.maxLength(2022)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  public submit_click():void
  {
      // ajax call to send data to server
      alert("Customer Details are registered.");
      let customerObj = this.carRegistrationForm.value;
      console.log(customerObj);
  }

}
