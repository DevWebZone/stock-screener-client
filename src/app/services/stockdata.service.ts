import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockdataService {
  constructor(private http: HttpClient) { }

  // Service to read stock Data csv into string 
  getStockData()
  {
    return this.http.get("/assets/complete.csv", {responseType: 'text'})
    
  }
}
