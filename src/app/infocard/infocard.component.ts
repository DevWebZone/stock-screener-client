import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StockData, StockObject } from '../interface/stock';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { MarketDataConnectionService } from '../services/market-data-connection.service';
import { StockdataService } from '../services/stockdata.service';

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
  stockData!: StockData;
  constructor(private route: ActivatedRoute, private authenticationService: AuthenticationService, private stockDataservice: StockdataService) {}

  ngOnInit(): void {
    
    const queryParams = this.route.snapshot.queryParams;
    this.token = localStorage.getItem("access_token")?.toString();
    console.log(this.token);
    if(this.token === undefined)
      this.authenticationService.getAuthorizationToken(queryParams['code'])
        .subscribe( {next: (response)=>{
        
          this.token= response.access_token;
          localStorage.setItem("access_token",  response.access_token)
          this.authenticationService.getMarketData(this.token, "NSE_INDEX|Nifty 50").subscribe( {next: (response)=>{
              
              const key = Object.keys(response.data)[0];
              
              this.stockData = response.data[key]
              this.stockName = "Nifty 50";
            }
          });
          }
        });
    else
          this.authenticationService.getMarketData(this.token, "NSE_INDEX|Nifty 50").subscribe( {next: (response)=>{      
            const key = Object.keys(response.data)[0];
            this.stockData = response.data[key]
            this.stockName = "Nifty 50";
          }
        });    
  }
  OnSubmit(){
      if(this.searchName.trim() != '')
        this.stockDataservice.getStockData().subscribe((data) => {
          let lines = data.split('\r\n');
          lines.forEach(line => 
            {
              let keyValue = line.split(',');
              let obj: StockObject = {instrument_name: keyValue[1], instrument_key:keyValue[0]}
            
              if(obj.instrument_name.toLowerCase().includes(this.searchName.toLowerCase()))
              {
               
                this.authenticationService.getMarketData(this.token, obj.instrument_key).subscribe( {next: (response)=>{
                  const key = Object.keys(response.data)[0];
                 
                  this.stockData = response.data[key]
                  this.stockName = obj.instrument_name;
                  this.searchName = '';
                    }
                  });
                  return;
              }
              //console.log(keyValue);
              
            }
            );
    });
  }
}
