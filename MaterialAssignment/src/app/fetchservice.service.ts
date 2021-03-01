import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchserviceService {

  private url="assets/data/product.json";

  constructor(private http:HttpClient) { }

  getdata()
  {
return this.http.get(this.url);
  }
}
