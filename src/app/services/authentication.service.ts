import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
    
  }

 getAuthorizationToken(Code:string): Observable<any>{

    const url = environment.authorizationUrl;
    const body = new HttpParams()
    .set('code', Code)
    .set('client_id', environment.apiClientId)
    .set('client_secret', environment.apiClientSecret)
    .set('redirect_uri', environment.apiRedirectUrl)
    .set('grant_type', 'authorization_code');

    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post<any>(url, body.toString(), {
     headers: headers
   })
  }

  getMarketData(access_token:any, stockName:any): Observable<any>{
    // Set request headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}` // Attach bearer token to Authorization header
    });
    const params = {
      "instrument_key" : stockName,
      "interval" : "1d"
    }
    // Make GET request with headers
    return this.http.get<any>(environment.marketDataUrl, { params: params, headers: headers });
  }
}