import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiUrl = 'http://localhost:8000/api/categories'
  constructor(private http: HttpClient) { }


  getAllCategories(){
    return this.http.get(this.apiUrl)
  }

  getOneCategory(id:number|string){
    return this.http.get(this.apiUrl + `/${id}`)

  }
}
