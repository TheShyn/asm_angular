import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {
  constructor(private AuthService: AuthService, private messageService:MessageService, private router:Router) {

  }
  dataUpload: any = {}
  submitted = false
  regex: any = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  isEmail(email: any): boolean {
    return this.regex.test(email)
  }
  onsubmit() {
    this.submitted = true
    
    if (this.dataUpload.email && this.dataUpload.password) {
      this.AuthService.checkLogin(this.dataUpload).subscribe(
        (response:any)=>{
          console.log( response)
          const a = { 
            accessToken : response.accessToken,
            email : response.user.email,
            name : response.user.name,
            id : response.user.id
          }
          localStorage.setItem('userInfor',JSON.stringify(a))

          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Login successfully', life: 2000 });
          if(response.user.role=== 'user'){
            setTimeout(()=>this.router.navigate(['/home']),2000)
          } else{
            setTimeout(()=>this.router.navigate(['/admin']),2000)
          }
        },
        (error)=>{
          console.log(error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        }
      )
    }
  }
}
