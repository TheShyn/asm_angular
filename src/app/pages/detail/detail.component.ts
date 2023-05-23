import { ProductsService } from 'src/app/services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios'
import { IProduct } from 'src/common/product';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: string = '';
  product:any = {}
  relateProducts: any[] = []
  all_datas:[] = []
  constructor(private route: ActivatedRoute, private ProductsService: ProductsService) { }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.getProductById();
    });
    this.ProductsService.getProducts().subscribe(
      (response: any) => {
        this.all_datas = response;
        this.getRelateProducts()
      },
      (error: any) => {
        console.log(error);
      }
    )
    
   

  }
  getRelateProducts(){
    this.relateProducts = this.all_datas.filter((item:any)=>{
      return item.categoryId._id === this.product.categoryId._id && item._id !== this.product._id
    })
    console.log(this.relateProducts)
  }
  getProductById() {
    this.ProductsService.getProduct(this.id).subscribe(
      (response) => {
        console.log(response)
        this.product = response.data
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
