import { Component, Input, OnInit } from '@angular/core';
import { product } from './product-list';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  @Input()
  category:string= "";
  categorizedProduct:product[] = [];

  productsArray:product[] = [
    {pid : 10, pname : "Samsung Mobile 01",  price :  50000, category: "Mobile"  } ,
    {pid : 20, pname : "Apple Mobile 02",  price :  20000, category: "Mobile"} ,
    {pid : 30, pname : "MI Mobile 03",  price :  15000, category: "Mobile"},
    {pid : 40, pname : "Samsung Tablet 01",  price :  50000, category: "Tablet"  } ,
    {pid : 50, pname : "Apple Tablet 02",  price :  20000, category: "Tablet"} ,
    {pid : 60, pname : "MI Tablet 03",  price :  15000, category: "Tablet"},
    {pid : 70, pname : "Samsung Laptop 01",  price :  50000, category: "Laptop"  } ,
    {pid : 80, pname : "Apple Laptop 02",  price :  20000, category: "Laptop"} ,
    {pid : 90, pname : "MI Laptop 03",  price :  15000, category: "Laptop"}
  ];

  ngOnInit(): void {
    this.categorizedProduct = this.productsArray.filter(item=>item.category);
  }

}
