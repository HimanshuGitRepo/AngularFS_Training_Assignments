import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productprice',
  templateUrl: './productprice.component.html',
  styleUrls: ['./productprice.component.css']
})
export class ProductpriceComponent implements OnInit {

  pname: string = "";
  uprice: any = 0;
  qty: number = 1;
  amt: number = 0;
  result1: string = "";
  result2: string = "";

  get_total(){
    this.amt = (this.uprice * this.qty);
    if(this.amt >= 10000)
    {
      this.result1 = "Total amount of " + this.pname + " is " + this.amt +" Rs";
    }

    else
    {
      this.result2 = "Total amount of " + this.pname + " is " + this.amt +" Rs";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
