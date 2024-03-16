import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StockObject } from '../interface/stock';

@Injectable({
  providedIn: 'root'
})
export class StockdataService {
  protected stockData: Array<StockObject> = [];
  constructor(private http: HttpClient) { }

  getStockData()
  {
    return this.http.get("/assets/complete.csv", {responseType: 'text'})
    //return this.stockData;
  }
}
