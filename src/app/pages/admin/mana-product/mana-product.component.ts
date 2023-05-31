import { ProductsService } from 'src/app/services/products/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mana-product',
  templateUrl: './mana-product.component.html',
  styleUrls: ['./mana-product.component.css']
})
export class ManaProductComponent {
  products:any=[]
  value:any
  constructor(private ProductsService:ProductsService){}
  ngOnInit() {
    this.ProductsService.getProducts().subscribe(
      (response)=>{
        this.products = response
        console.log(response)
      }
    )
}
}
