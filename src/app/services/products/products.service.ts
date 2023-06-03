import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:8000/api/products'
  constructor(private http: HttpClient) { }

  // getAllProduct(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl)
  // }

  //lấy tất cả
  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }

  // private handleError(error: HttpErrorResponse): Observable<never> {
  //   let errorMessage = 'Đã xảy ra lỗi';
  //   if (error.error instanceof ErrorEvent) {
  //     // Xử lý lỗi client-side
  //     errorMessage = error.error.message;
  //   } else {
  //     // Xử lý lỗi server-side
  //     errorMessage = `Mã lỗi: ${error.status}\nThông báo: ${error.error.message}`;
  //   }
  //   console.error(errorMessage);
  //   return throwError(errorMessage);
  // }

  //lấy 1
  getProduct(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  createProduct(product: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    });
    return this.http.post<any>(this.apiUrl, product);
  }

  updateProduct(id: string, product: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, product);
  }

  deleteProduct(id: string ): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
