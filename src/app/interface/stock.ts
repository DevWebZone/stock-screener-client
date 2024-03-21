// api response type for a stock
export interface StockData {
    ohlc: OHLC;
    last_price: Number | undefined;
    instrument_token: string;
}
interface OHLC{
    open: Number | undefined;
    high: Number | undefined;
    close: Number | undefined;
    low: Number | undefined;
}
// key value pair of stock name and its corresponding key used in upstox api
export interface StockObject{
    instrument_name: string;
    instrument_key: string;
}