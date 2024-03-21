import { Injectable } from '@angular/core';
import * as protobuf from 'protobufjs';
//import {decodeFeedResponse} from '../interface/feed'
import { Buffer } from 'buffer';
import { protobufPackage, FeedResponse, LTPC, MarketFullFeed, MarketLevel } from '../interface/MarketDataFeed';
import { Observable, Subscriber } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SocketConnectionService {
  protobufRoot: any
  private webSocket!: WebSocket;
  private response!: Subscriber<FeedResponse>
  constructor() {}
  connect(wsUrl:string, token:any, instrument_id:string): Observable<FeedResponse>{
    this.webSocket = new WebSocket(wsUrl);
    console.log(this.protobufRoot);
    this.webSocket.onopen = (event) => {
      console.log('Connected to WebSocket server');
      // const data = {
      //   guid: "someguid",
      //   method: "sub",
      //   data: {
      //     mode: "full",
      //     instrumentKeys: [instrument_id],
      //   }
      // };
      // this.sendData(data);
      // Send some initial data once connected (if needed)
      setTimeout(() => {
          const data = {
            guid: "someguid",
            method: "sub",
            data: {
              mode: "full",
              instrumentKeys: [instrument_id],
            }
          };
          console.log(data)
          this.sendData(data);
        }, 1000);
     
    };

    this.webSocket.onmessage = async (event) => {
      
      //FeedResponse.create();
      const response = await new Response(event.data).arrayBuffer(); 
      console.log(response);
      this.response.next(FeedResponse.decode(new Uint8Array(response)));
      console.log(this.response);
      //return this.response;
      // Handle received messages as needed
    };

    this.webSocket.onclose = (event) => {
      console.log('WebSocket connection closed');
    };

    this.webSocket.onerror = (event) => {
      console.error('WebSocket error:', event);
    };
    
    return this.createObservable();
       
  }
  createObservable() : Observable<FeedResponse> {
    return new Observable(observer => {
      this.response = observer;
    });
}
  
  sendData(data: any): void {
    console.log('sending data')
    if (this.webSocket.readyState === WebSocket.OPEN) {
      this.webSocket.send(Buffer.from(JSON.stringify(data)));
    } else {
      console.error('WebSocket is not open. Cannot send data.');
    }
  }
  decodeProfobuf(buffer:any){
    if (!this.protobufRoot) {
      console.warn("Protobuf part not initialized yet!");
      return null;
    }
  
    const FeedResponse = this.protobufRoot.lookupType(
      "com.upstox.marketdatafeeder.rpc.proto.FeedResponse"
    );
    return FeedResponse.decode(buffer);
  };
}
