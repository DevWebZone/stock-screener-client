import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StockData, StockObject } from '../interface/stock';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { StockdataService } from '../services/stockdata.service';
import { SocketConnectionService } from '../services/socket-connection.service';

import { protobufPackage, FeedResponse, LTPC, MarketFullFeed, MarketLevel, Feed } from '../interface/MarketDataFeed';
@Component({
  selector: 'app-infocard',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './infocard.component.html',
  styleUrl: './infocard.component.scss'
})
export class InfocardComponent implements OnInit {

  token: string | undefined;
  searchName: string = '';
  stockName: string = '';
  stockData!: Feed;
  constructor(private route: ActivatedRoute, private authenticationService: AuthenticationService, private stockDataservice: StockdataService, private marketService: SocketConnectionService ) {}
  // Once page loads
  ngOnInit(): void {
    // Main App Component. By default Nifty 50 data is display once users lands for the first time
    const queryParams = this.route.snapshot.queryParams;
    this.token = sessionStorage.getItem("access_token")?.toString(); // get access_token from session storage to reuse in case of reload
    console.log(this.token);
    if(this.token === undefined)
      this.authenticationService.getAuthorizationToken(queryParams['code']) // gets bearer token using authorization code to pass in market data api 
        .subscribe( {next: (response)=>{
        
          this.token= response.access_token;
          sessionStorage.setItem("access_token",  response.access_token)
          this.authenticationService.getMarketDataUrl(this.token).subscribe( {next: (response)=>{
            console.log(response.data.authorizedRedirectUri);
            
             this.marketService.connect(response.data.authorizedRedirectUri,this.token,"NSE_EQ|INE793A01012").subscribe(quote => {
              console.log(quote);
              this.stockData = quote.feeds["NSE_EQ|INE793A01012"];
              // this.stockData.last_price = quote.feeds["NSE_INDEX|Nifty 50"].ltpc?.ltp;
              // this.stockData.ohlc.open = quote.feeds["NSE_INDEX|Nifty 50"].ff?.marketFF?.marketOHLC?.ohlc[0].open;
              // this.stockData.ohlc.close = quote.feeds["NSE_INDEX|Nifty 50"].ff?.marketFF?.marketOHLC?.ohlc[0].close;
              // this.stockData.ohlc.high = quote.feeds["NSE_INDEX|Nifty 50"].ff?.marketFF?.marketOHLC?.ohlc[0].high;
              // this.stockData.ohlc.low = quote.feeds["NSE_INDEX|Nifty 50"].ff?.marketFF?.marketOHLC?.ohlc[0].low;
              this.stockName = "ACCELYA SOLN INDIA LTD";
            });
            console.log("reached");
            // ws.on("message", (data) => {
            //   console.log(JSON.stringify(this.marketService.decodeProfobuf(data)['feeds']['NSE_INDEX|Nifty 50']));
            //  });
          }
          });
          // gets data for a defined stock
          // this.authenticationService.getMarketData(this.token, "NSE_INDEX|Nifty 50").subscribe( {next: (response)=>{
              
          //     const key = Object.keys(response.data)[0]; // first key contains name of stock in response. dynamic in nature
              
          //     this.stockData = response.data[key]
          //     this.stockName = "Nifty 50";
          //   }
          // });
          }
        });
    else 
      this.authenticationService.getMarketDataUrl(this.token).subscribe( {next: (response)=>{
        console.log(response.data.authorizedRedirectUri);
        
        this.marketService.connect(response.data.authorizedRedirectUri,this.token,"NSE_EQ|INE793A01012").subscribe(quote => {
          console.log(quote);
          this.stockData = quote.feeds["NSE_EQ|INE793A01012"];
          console.log(this.stockData);
          // this.stockData.last_price = quote.feeds["NSE_INDEX|Nifty 50"].ltpc?.ltp;
          // this.stockData.ohlc.open = quote.feeds["NSE_INDEX|Nifty 50"].ff?.marketFF?.marketOHLC?.ohlc[0].open;
          // this.stockData.ohlc.close = quote.feeds["NSE_INDEX|Nifty 50"].ff?.marketFF?.marketOHLC?.ohlc[0].close;
          // this.stockData.ohlc.high = quote.feeds["NSE_INDEX|Nifty 50"].ff?.marketFF?.marketOHLC?.ohlc[0].high;
          // this.stockData.ohlc.low = quote.feeds["NSE_INDEX|Nifty 50"].ff?.marketFF?.marketOHLC?.ohlc[0].low;
          this.stockName = "ACCELYA SOLN INDIA LTD";
        });
      console.log("reached");
      // ws.on("message", (data) => {
      //   console.log(JSON.stringify(this.marketService.decodeProfobuf(data)['feeds']['NSE_INDEX|Nifty 50']));
      //  });
    }
    });
  }
  // Once user submits by pressing enter 
  OnSubmit(){
    // check if search field contains value
      if(this.searchName.trim() != '')
        this.stockDataservice.getStockData().subscribe((data) => { //search from the list of stocks for match with user defined stock name
          let lines = data.split('\r\n'); // spliting raw data into array by \r\n
          lines.forEach(line => 
            {
              let keyValue = line.split(','); // splitting values using comma
              let obj: StockObject = {instrument_name: keyValue[1], instrument_key:keyValue[0]}
            
              if(obj.instrument_name.toLowerCase().includes(this.searchName.toLowerCase()))
              {
               // name is matched, gets data for the matched instrument_name using instrument_key and getMarketData Service same as above
               this.authenticationService.getMarketDataUrl(this.token).subscribe( {next: (response)=>{
                console.log(response.data.authorizedRedirectUri);
                
                this.marketService.connect(response.data.authorizedRedirectUri,this.token, obj.instrument_key).subscribe(quote => {
                  console.log(quote);
                  this.stockData = quote.feeds[obj.instrument_key];
                  console.log(this.stockData);
                  // this.stockData.last_price = quote.feeds["NSE_INDEX|Nifty 50"].ltpc?.ltp;
                  // this.stockData.ohlc.open = quote.feeds["NSE_INDEX|Nifty 50"].ff?.marketFF?.marketOHLC?.ohlc[0].open;
                  // this.stockData.ohlc.close = quote.feeds["NSE_INDEX|Nifty 50"].ff?.marketFF?.marketOHLC?.ohlc[0].close;
                  // this.stockData.ohlc.high = quote.feeds["NSE_INDEX|Nifty 50"].ff?.marketFF?.marketOHLC?.ohlc[0].high;
                  // this.stockData.ohlc.low = quote.feeds["NSE_INDEX|Nifty 50"].ff?.marketFF?.marketOHLC?.ohlc[0].low;
                  this.stockName = obj.instrument_name;
                  this.searchName = '';
                });
                }});
                return;
              }
              //console.log(keyValue);
              
            }
            );
    });
  }
}
