// api response type for a stock
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
// key value pair of stock name and its corresponding key used in upstox api
export interface StockObject{
    instrument_name: string;
    instrument_key: string;
}