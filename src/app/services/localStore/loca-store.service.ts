import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaStoreService {

  constructor() { }
  setStore(name: string,data:any){
    return localStorage.setItem(name,JSON.stringify(data))
  }
  getStore(name: string){
      return JSON.parse(localStorage.getItem(name) || "{}") 
  }
  removeStore(name: string){
    return localStorage.removeItem(name)
  }
}
