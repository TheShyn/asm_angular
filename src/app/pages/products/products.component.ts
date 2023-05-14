import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  datas:any = []
  ngOnInit(): void {
    axios.get("http://localhost:3000/products")
    .then(response =>{
      console.log(response.data)
      this.datas = response.data
    })
    .catch(error => {
      console.log(error)
    })
  }
}
