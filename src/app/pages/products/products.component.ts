import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  datas:any = []
  typeList:boolean = true

  changeListColumn (){
    console.log('dasds222')

    this.typeList = true
  }
  changeListRow (){
    console.log('dasds')
    this.typeList = false
  }
  // ngOnInit(): void {
  //   axios.get("http://localhost:3000/products")
  //   .then(response =>{
  //     console.log(response.data)
  //     this.datas = response.data
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }
}
