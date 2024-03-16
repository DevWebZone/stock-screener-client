import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//const protobuf = require("protobufjs");
@Injectable({
  providedIn: 'root'
})
export class MarketDataConnectionService {
  
  constructor(private http: HttpClient) { 

  }
  
  
}
