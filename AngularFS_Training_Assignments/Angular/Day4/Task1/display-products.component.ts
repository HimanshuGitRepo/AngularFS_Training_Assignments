import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  displayMode:string  = "Details";


  productsArray:any[] = [
    {pid : 10, pname : "Samsung Mobile 01",  price :  50000, category: "Mobile", picture: "a"  } ,
    {pid : 20, pname : "Apple Mobile 02",  price :  20000, category: "Mobile", picture: "a" } ,
    {pid : 30, pname : "MI Mobile 03",  price :  15000, category: "Mobile", picture: "a" },
    {pid : 40, pname : "Samsung Tablet 01",  price :  50000, category: "Tablet" , picture: "a"  } ,
    {pid : 50, pname : "Apple Tablet 02",  price :  20000, category: "Tablet", picture: "a" } ,
    {pid : 60, pname : "MI Tablet 03",  price :  15000, category: "Tablet", picture: "a" },
    {pid : 70, pname : "Samsung Laptop 01",  price :  50000, category: "Laptop" , picture: "a"  } ,
    {pid : 80, pname : "Apple Laptop 02",  price :  20000, category: "Laptop", picture: "a" } ,
    {pid : 90, pname : "MI Laptop 03",  price :  15000, category: "Laptop", picture: "a" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectedDisplayType(value:string)
  {
    this.displayMode = value;
  }


}
