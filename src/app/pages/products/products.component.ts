import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  cate: string = ''
  categories: any = []
  all_datas: any = []
  datas: any = []
  typeList: boolean = true
  constructor(private ProductsService: ProductsService, private CategoriesService: CategoriesService, private route: ActivatedRoute) {

  }

  changeListColumn() {
    this.typeList = true
  }
  changeListRow() {
    this.typeList = false
  }

  filterProducts() {
    if (this.cate == 'all') {
      return this.datas = this.all_datas
    }
    this.datas = this.all_datas.filter((item: any) => {
      return item?.categoryId?.name === this.cate
    })
  }

  ngOnInit(): void {
    this.ProductsService.getProducts().subscribe(
      (response: any) => {
        this.all_datas = response;
        this.datas = response;
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    )

    this.CategoriesService.getAllCategories().subscribe(
      (response: any) => {
        this.categories = response.data;
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    )

    this.route.queryParams
      .subscribe((params: any) => {
        // console.log(params); // { orderby: "price" }
        this.cate = params?.cate;
        console.log(this.cate); // price
        if (this.cate) {
          this.filterProducts()
        }
      }
      )
  }



}
