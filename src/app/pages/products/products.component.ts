import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  datas: any = []
  typeList: boolean = true
  constructor(private ProductsService: ProductsService) {

  }

  changeListColumn() {
    this.typeList = true
  }
  changeListRow() {
    this.typeList = false
  }
  ngOnInit(): void {
    this.ProductsService.getProducts().subscribe(
      (response: any) => {
        this.datas = response;
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}
