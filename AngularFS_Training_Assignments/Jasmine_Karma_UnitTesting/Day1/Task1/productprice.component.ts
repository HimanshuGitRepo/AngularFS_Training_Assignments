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
  result: string = "";

  get_total(){
    this.amt = (this.uprice * this.qty);
    this.result = "Total amount of " + this.pname + " is " + this.amt +" Rs";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
