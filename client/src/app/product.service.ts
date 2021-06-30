import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'http://localhost:4200/api'
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.apiUrl)
  }
}
