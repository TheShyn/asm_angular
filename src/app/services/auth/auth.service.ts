import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api/auth'
  constructor(private http: HttpClient) { }
  checkLogin(data: any) {
    const urlRes = this.apiUrl + '/login'
    return this.http.post(urlRes,data)
    
  }
  register(data:any){
    const urlRes = this.apiUrl + '/register'
    return this.http.post(urlRes,data)
  }
}
