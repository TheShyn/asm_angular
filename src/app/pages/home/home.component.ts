import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any[] | undefined;
  constructor(private ProductsService: ProductsService){

  }

  getProducts() {
    this.ProductsService.getProducts().subscribe(
      (response:any) => {
        this.products = response;
        console.log(response);
      },
      (error:any) => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.getProducts();
  }
}
