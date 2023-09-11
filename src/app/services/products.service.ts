import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
/*
  getProductsList(){
    return this.http.get('https://dummyjson.com/products', {
      headers: {
        'Accept-language': 'ar'
      },
      params: {
        category: 'phone'
      }
    });
  }
*/
  getProductsList(): Observable<any> {
    return this.http.get('https://dummyjson.com/products');
  }

  getProductDetails(id: number| string): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
