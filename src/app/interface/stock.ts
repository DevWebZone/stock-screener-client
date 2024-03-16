export interface StockData {
    ohlc: OHLC;
    last_price: Number;
    instrument_token: string;
}
interface OHLC{
    open: Number;
    high: Number;
    close: Number;
    low: Number;
}

export interface StockObject{
    instrument_name: string;
    instrument_key: string;
}