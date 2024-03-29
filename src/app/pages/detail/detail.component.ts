import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  id: any;
  product:any
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(params.get('id'))
      this.getProductById();
    });
  }

  getProductById() {
    axios.get(` http://localhost:3000/products/${this.id}`)
      .then(response => {
        this.product = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
