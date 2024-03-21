/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long from "long";

export const protobufPackage = "com.upstox.marketdatafeeder.rpc.proto";

export enum Type {
  initial_feed = 0,
  live_feed = 1,
  UNRECOGNIZED = -1,
}

export function typeFromJSON(object: any): Type {
  switch (object) {
    case 0:
    case "initial_feed":
      return Type.initial_feed;
    case 1:
    case "live_feed":
      return Type.live_feed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Type.UNRECOGNIZED;
  }
}

export function typeToJSON(object: Type): string {
  switch (object) {
    case Type.initial_feed:
      return "initial_feed";
    case Type.live_feed:
      return "live_feed";
    case Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface LTPC {
  ltp: number;
  ltt: number;
  ltq: number;
  /** close price */
  cp: number;
}

export interface MarketLevel {
  bidAskQuote: Quote[];
}

export interface MarketOHLC {
  ohlc: OHLC[];
}

export interface Quote {
  /** bid quantity */
  bq: number;
  /** bid price */
  bp: number;
  /** bid number of orders */
  bno: number;
  /** ask quantity */
  aq: number;
  /** ask price */
  ap: number;
  /** ask number of orders */
  ano: number;
}

export interface OptionGreeks {
  /** option price */
  op: number;
  /** underlying price */
  up: number;
  /** implied volatility */
  iv: number;
  delta: number;
  theta: number;
  gamma: number;
  vega: number;
  rho: number;
}

export interface ExtendedFeedDetails {
  /** avg traded price */
  atp: number;
  /** close price */
  cp: number;
  /** volume traded today */
  vtt: number;
  /** open interest */
  oi: number;
  /** change oi */
  changeOi: number;
  lastClose: number;
  /** total buy quantity */
  tbq: number;
  /** total sell quantity */
  tsq: number;
  close: number;
  /** lower circuit */
  lc: number;
  /** upper circuit */
  uc: number;
  /** yearly high */
  yh: number;
  /** yearly low */
  yl: number;
  /** fill price */
  fp: number;
  /** fill volume */
  fv: number;
  /** mbp buy */
  mbpBuy: number;
  /** mbp sell */
  mbpSell: number;
  /** traded volume */
  tv: number;
  /** day high open interest */
  dhoi: number;
  /** day low open interest */
  dloi: number;
  /** spot price */
  sp: number;
  /** previous open interest */
  poi: number;
}

export interface OHLC {
  interval: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  ts: number;
}

export interface MarketFullFeed {
  ltpc: LTPC | undefined;
  marketLevel: MarketLevel | undefined;
  optionGreeks: OptionGreeks | undefined;
  marketOHLC: MarketOHLC | undefined;
  eFeedDetails: ExtendedFeedDetails | undefined;
}

export interface IndexFullFeed {
  ltpc: LTPC | undefined;
  marketOHLC: MarketOHLC | undefined;
  lastClose: number;
  /** yearly high */
  yh: number;
  /** yearly low */
  yl: number;
}

export interface FullFeed {
  marketFF?: MarketFullFeed | undefined;
  indexFF?: IndexFullFeed | undefined;
}

export interface OptionChain {
  ltpc: LTPC | undefined;
  bidAskQuote: Quote | undefined;
  optionGreeks: OptionGreeks | undefined;
  eFeedDetails: ExtendedFeedDetails | undefined;
}

export interface Feed {
  ltpc?: LTPC | undefined;
  ff?: FullFeed | undefined;
  oc?: OptionChain | undefined;
}

export interface FeedResponse {
  type: Type;
  feeds: { [key: string]: Feed };
}

export interface FeedResponse_FeedsEntry {
  key: string;
  value: Feed | undefined;
}

function createBaseLTPC(): LTPC {
  return { ltp: 0, ltt: 0, ltq: 0, cp: 0 };
}

export const LTPC = {
  encode(message: LTPC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ltp !== 0) {
      writer.uint32(9).double(message.ltp);
    }
    if (message.ltt !== 0) {
      writer.uint32(16).int64(message.ltt);
    }
    if (message.ltq !== 0) {
      writer.uint32(24).int64(message.ltq);
    }
    if (message.cp !== 0) {
      writer.uint32(33).double(message.cp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LTPC {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLTPC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.ltp = reader.double();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.ltt = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.ltq = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.cp = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LTPC {
    return {
      ltp: isSet(object.ltp) ? globalThis.Number(object.ltp) : 0,
      ltt: isSet(object.ltt) ? globalThis.Number(object.ltt) : 0,
      ltq: isSet(object.ltq) ? globalThis.Number(object.ltq) : 0,
      cp: isSet(object.cp) ? globalThis.Number(object.cp) : 0,
    };
  },

  toJSON(message: LTPC): unknown {
    const obj: any = {};
    if (message.ltp !== 0) {
      obj.ltp = message.ltp;
    }
    if (message.ltt !== 0) {
      obj.ltt = Math.round(message.ltt);
    }
    if (message.ltq !== 0) {
      obj.ltq = Math.round(message.ltq);
    }
    if (message.cp !== 0) {
      obj.cp = message.cp;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LTPC>, I>>(base?: I): LTPC {
    return LTPC.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LTPC>, I>>(object: I): LTPC {
    const message = createBaseLTPC();
    message.ltp = object.ltp ?? 0;
    message.ltt = object.ltt ?? 0;
    message.ltq = object.ltq ?? 0;
    message.cp = object.cp ?? 0;
    return message;
  },
};

function createBaseMarketLevel(): MarketLevel {
  return { bidAskQuote: [] };
}

export const MarketLevel = {
  encode(message: MarketLevel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bidAskQuote) {
      Quote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketLevel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bidAskQuote.push(Quote.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketLevel {
    return {
      bidAskQuote: globalThis.Array.isArray(object?.bidAskQuote)
        ? object.bidAskQuote.map((e: any) => Quote.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MarketLevel): unknown {
    const obj: any = {};
    if (message.bidAskQuote?.length) {
      obj.bidAskQuote = message.bidAskQuote.map((e) => Quote.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MarketLevel>, I>>(base?: I): MarketLevel {
    return MarketLevel.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MarketLevel>, I>>(object: I): MarketLevel {
    const message = createBaseMarketLevel();
    message.bidAskQuote = object.bidAskQuote?.map((e) => Quote.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMarketOHLC(): MarketOHLC {
  return { ohlc: [] };
}

export const MarketOHLC = {
  encode(message: MarketOHLC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ohlc) {
      OHLC.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketOHLC {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketOHLC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ohlc.push(OHLC.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketOHLC {
    return { ohlc: globalThis.Array.isArray(object?.ohlc) ? object.ohlc.map((e: any) => OHLC.fromJSON(e)) : [] };
  },

  toJSON(message: MarketOHLC): unknown {
    const obj: any = {};
    if (message.ohlc?.length) {
      obj.ohlc = message.ohlc.map((e) => OHLC.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MarketOHLC>, I>>(base?: I): MarketOHLC {
    return MarketOHLC.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MarketOHLC>, I>>(object: I): MarketOHLC {
    const message = createBaseMarketOHLC();
    message.ohlc = object.ohlc?.map((e) => OHLC.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuote(): Quote {
  return { bq: 0, bp: 0, bno: 0, aq: 0, ap: 0, ano: 0 };
}

export const Quote = {
  encode(message: Quote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bq !== 0) {
      writer.uint32(8).int32(message.bq);
    }
    if (message.bp !== 0) {
      writer.uint32(17).double(message.bp);
    }
    if (message.bno !== 0) {
      writer.uint32(24).int32(message.bno);
    }
    if (message.aq !== 0) {
      writer.uint32(32).int32(message.aq);
    }
    if (message.ap !== 0) {
      writer.uint32(41).double(message.ap);
    }
    if (message.ano !== 0) {
      writer.uint32(48).int32(message.ano);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Quote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bq = reader.int32();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.bp = reader.double();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.bno = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.aq = reader.int32();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.ap = reader.double();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.ano = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Quote {
    return {
      bq: isSet(object.bq) ? globalThis.Number(object.bq) : 0,
      bp: isSet(object.bp) ? globalThis.Number(object.bp) : 0,
      bno: isSet(object.bno) ? globalThis.Number(object.bno) : 0,
      aq: isSet(object.aq) ? globalThis.Number(object.aq) : 0,
      ap: isSet(object.ap) ? globalThis.Number(object.ap) : 0,
      ano: isSet(object.ano) ? globalThis.Number(object.ano) : 0,
    };
  },

  toJSON(message: Quote): unknown {
    const obj: any = {};
    if (message.bq !== 0) {
      obj.bq = Math.round(message.bq);
    }
    if (message.bp !== 0) {
      obj.bp = message.bp;
    }
    if (message.bno !== 0) {
      obj.bno = Math.round(message.bno);
    }
    if (message.aq !== 0) {
      obj.aq = Math.round(message.aq);
    }
    if (message.ap !== 0) {
      obj.ap = message.ap;
    }
    if (message.ano !== 0) {
      obj.ano = Math.round(message.ano);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Quote>, I>>(base?: I): Quote {
    return Quote.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Quote>, I>>(object: I): Quote {
    const message = createBaseQuote();
    message.bq = object.bq ?? 0;
    message.bp = object.bp ?? 0;
    message.bno = object.bno ?? 0;
    message.aq = object.aq ?? 0;
    message.ap = object.ap ?? 0;
    message.ano = object.ano ?? 0;
    return message;
  },
};

function createBaseOptionGreeks(): OptionGreeks {
  return { op: 0, up: 0, iv: 0, delta: 0, theta: 0, gamma: 0, vega: 0, rho: 0 };
}

export const OptionGreeks = {
  encode(message: OptionGreeks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.op !== 0) {
      writer.uint32(9).double(message.op);
    }
    if (message.up !== 0) {
      writer.uint32(17).double(message.up);
    }
    if (message.iv !== 0) {
      writer.uint32(25).double(message.iv);
    }
    if (message.delta !== 0) {
      writer.uint32(33).double(message.delta);
    }
    if (message.theta !== 0) {
      writer.uint32(41).double(message.theta);
    }
    if (message.gamma !== 0) {
      writer.uint32(49).double(message.gamma);
    }
    if (message.vega !== 0) {
      writer.uint32(57).double(message.vega);
    }
    if (message.rho !== 0) {
      writer.uint32(65).double(message.rho);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptionGreeks {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptionGreeks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.op = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.up = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.iv = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.delta = reader.double();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.theta = reader.double();
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.gamma = reader.double();
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.vega = reader.double();
          continue;
        case 8:
          if (tag !== 65) {
            break;
          }

          message.rho = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OptionGreeks {
    return {
      op: isSet(object.op) ? globalThis.Number(object.op) : 0,
      up: isSet(object.up) ? globalThis.Number(object.up) : 0,
      iv: isSet(object.iv) ? globalThis.Number(object.iv) : 0,
      delta: isSet(object.delta) ? globalThis.Number(object.delta) : 0,
      theta: isSet(object.theta) ? globalThis.Number(object.theta) : 0,
      gamma: isSet(object.gamma) ? globalThis.Number(object.gamma) : 0,
      vega: isSet(object.vega) ? globalThis.Number(object.vega) : 0,
      rho: isSet(object.rho) ? globalThis.Number(object.rho) : 0,
    };
  },

  toJSON(message: OptionGreeks): unknown {
    const obj: any = {};
    if (message.op !== 0) {
      obj.op = message.op;
    }
    if (message.up !== 0) {
      obj.up = message.up;
    }
    if (message.iv !== 0) {
      obj.iv = message.iv;
    }
    if (message.delta !== 0) {
      obj.delta = message.delta;
    }
    if (message.theta !== 0) {
      obj.theta = message.theta;
    }
    if (message.gamma !== 0) {
      obj.gamma = message.gamma;
    }
    if (message.vega !== 0) {
      obj.vega = message.vega;
    }
    if (message.rho !== 0) {
      obj.rho = message.rho;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OptionGreeks>, I>>(base?: I): OptionGreeks {
    return OptionGreeks.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OptionGreeks>, I>>(object: I): OptionGreeks {
    const message = createBaseOptionGreeks();
    message.op = object.op ?? 0;
    message.up = object.up ?? 0;
    message.iv = object.iv ?? 0;
    message.delta = object.delta ?? 0;
    message.theta = object.theta ?? 0;
    message.gamma = object.gamma ?? 0;
    message.vega = object.vega ?? 0;
    message.rho = object.rho ?? 0;
    return message;
  },
};

function createBaseExtendedFeedDetails(): ExtendedFeedDetails {
  return {
    atp: 0,
    cp: 0,
    vtt: 0,
    oi: 0,
    changeOi: 0,
    lastClose: 0,
    tbq: 0,
    tsq: 0,
    close: 0,
    lc: 0,
    uc: 0,
    yh: 0,
    yl: 0,
    fp: 0,
    fv: 0,
    mbpBuy: 0,
    mbpSell: 0,
    tv: 0,
    dhoi: 0,
    dloi: 0,
    sp: 0,
    poi: 0,
  };
}

export const ExtendedFeedDetails = {
  encode(message: ExtendedFeedDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.atp !== 0) {
      writer.uint32(9).double(message.atp);
    }
    if (message.cp !== 0) {
      writer.uint32(17).double(message.cp);
    }
    if (message.vtt !== 0) {
      writer.uint32(24).int64(message.vtt);
    }
    if (message.oi !== 0) {
      writer.uint32(33).double(message.oi);
    }
    if (message.changeOi !== 0) {
      writer.uint32(41).double(message.changeOi);
    }
    if (message.lastClose !== 0) {
      writer.uint32(49).double(message.lastClose);
    }
    if (message.tbq !== 0) {
      writer.uint32(57).double(message.tbq);
    }
    if (message.tsq !== 0) {
      writer.uint32(65).double(message.tsq);
    }
    if (message.close !== 0) {
      writer.uint32(73).double(message.close);
    }
    if (message.lc !== 0) {
      writer.uint32(81).double(message.lc);
    }
    if (message.uc !== 0) {
      writer.uint32(89).double(message.uc);
    }
    if (message.yh !== 0) {
      writer.uint32(97).double(message.yh);
    }
    if (message.yl !== 0) {
      writer.uint32(105).double(message.yl);
    }
    if (message.fp !== 0) {
      writer.uint32(113).double(message.fp);
    }
    if (message.fv !== 0) {
      writer.uint32(120).int32(message.fv);
    }
    if (message.mbpBuy !== 0) {
      writer.uint32(128).int64(message.mbpBuy);
    }
    if (message.mbpSell !== 0) {
      writer.uint32(136).int64(message.mbpSell);
    }
    if (message.tv !== 0) {
      writer.uint32(144).int64(message.tv);
    }
    if (message.dhoi !== 0) {
      writer.uint32(153).double(message.dhoi);
    }
    if (message.dloi !== 0) {
      writer.uint32(161).double(message.dloi);
    }
    if (message.sp !== 0) {
      writer.uint32(169).double(message.sp);
    }
    if (message.poi !== 0) {
      writer.uint32(177).double(message.poi);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedFeedDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedFeedDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.atp = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.cp = reader.double();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.vtt = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.oi = reader.double();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.changeOi = reader.double();
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.lastClose = reader.double();
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.tbq = reader.double();
          continue;
        case 8:
          if (tag !== 65) {
            break;
          }

          message.tsq = reader.double();
          continue;
        case 9:
          if (tag !== 73) {
            break;
          }

          message.close = reader.double();
          continue;
        case 10:
          if (tag !== 81) {
            break;
          }

          message.lc = reader.double();
          continue;
        case 11:
          if (tag !== 89) {
            break;
          }

          message.uc = reader.double();
          continue;
        case 12:
          if (tag !== 97) {
            break;
          }

          message.yh = reader.double();
          continue;
        case 13:
          if (tag !== 105) {
            break;
          }

          message.yl = reader.double();
          continue;
        case 14:
          if (tag !== 113) {
            break;
          }

          message.fp = reader.double();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.fv = reader.int32();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.mbpBuy = longToNumber(reader.int64() as Long);
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.mbpSell = longToNumber(reader.int64() as Long);
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.tv = longToNumber(reader.int64() as Long);
          continue;
        case 19:
          if (tag !== 153) {
            break;
          }

          message.dhoi = reader.double();
          continue;
        case 20:
          if (tag !== 161) {
            break;
          }

          message.dloi = reader.double();
          continue;
        case 21:
          if (tag !== 169) {
            break;
          }

          message.sp = reader.double();
          continue;
        case 22:
          if (tag !== 177) {
            break;
          }

          message.poi = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExtendedFeedDetails {
    return {
      atp: isSet(object.atp) ? globalThis.Number(object.atp) : 0,
      cp: isSet(object.cp) ? globalThis.Number(object.cp) : 0,
      vtt: isSet(object.vtt) ? globalThis.Number(object.vtt) : 0,
      oi: isSet(object.oi) ? globalThis.Number(object.oi) : 0,
      changeOi: isSet(object.changeOi) ? globalThis.Number(object.changeOi) : 0,
      lastClose: isSet(object.lastClose) ? globalThis.Number(object.lastClose) : 0,
      tbq: isSet(object.tbq) ? globalThis.Number(object.tbq) : 0,
      tsq: isSet(object.tsq) ? globalThis.Number(object.tsq) : 0,
      close: isSet(object.close) ? globalThis.Number(object.close) : 0,
      lc: isSet(object.lc) ? globalThis.Number(object.lc) : 0,
      uc: isSet(object.uc) ? globalThis.Number(object.uc) : 0,
      yh: isSet(object.yh) ? globalThis.Number(object.yh) : 0,
      yl: isSet(object.yl) ? globalThis.Number(object.yl) : 0,
      fp: isSet(object.fp) ? globalThis.Number(object.fp) : 0,
      fv: isSet(object.fv) ? globalThis.Number(object.fv) : 0,
      mbpBuy: isSet(object.mbpBuy) ? globalThis.Number(object.mbpBuy) : 0,
      mbpSell: isSet(object.mbpSell) ? globalThis.Number(object.mbpSell) : 0,
      tv: isSet(object.tv) ? globalThis.Number(object.tv) : 0,
      dhoi: isSet(object.dhoi) ? globalThis.Number(object.dhoi) : 0,
      dloi: isSet(object.dloi) ? globalThis.Number(object.dloi) : 0,
      sp: isSet(object.sp) ? globalThis.Number(object.sp) : 0,
      poi: isSet(object.poi) ? globalThis.Number(object.poi) : 0,
    };
  },

  toJSON(message: ExtendedFeedDetails): unknown {
    const obj: any = {};
    if (message.atp !== 0) {
      obj.atp = message.atp;
    }
    if (message.cp !== 0) {
      obj.cp = message.cp;
    }
    if (message.vtt !== 0) {
      obj.vtt = Math.round(message.vtt);
    }
    if (message.oi !== 0) {
      obj.oi = message.oi;
    }
    if (message.changeOi !== 0) {
      obj.changeOi = message.changeOi;
    }
    if (message.lastClose !== 0) {
      obj.lastClose = message.lastClose;
    }
    if (message.tbq !== 0) {
      obj.tbq = message.tbq;
    }
    if (message.tsq !== 0) {
      obj.tsq = message.tsq;
    }
    if (message.close !== 0) {
      obj.close = message.close;
    }
    if (message.lc !== 0) {
      obj.lc = message.lc;
    }
    if (message.uc !== 0) {
      obj.uc = message.uc;
    }
    if (message.yh !== 0) {
      obj.yh = message.yh;
    }
    if (message.yl !== 0) {
      obj.yl = message.yl;
    }
    if (message.fp !== 0) {
      obj.fp = message.fp;
    }
    if (message.fv !== 0) {
      obj.fv = Math.round(message.fv);
    }
    if (message.mbpBuy !== 0) {
      obj.mbpBuy = Math.round(message.mbpBuy);
    }
    if (message.mbpSell !== 0) {
      obj.mbpSell = Math.round(message.mbpSell);
    }
    if (message.tv !== 0) {
      obj.tv = Math.round(message.tv);
    }
    if (message.dhoi !== 0) {
      obj.dhoi = message.dhoi;
    }
    if (message.dloi !== 0) {
      obj.dloi = message.dloi;
    }
    if (message.sp !== 0) {
      obj.sp = message.sp;
    }
    if (message.poi !== 0) {
      obj.poi = message.poi;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExtendedFeedDetails>, I>>(base?: I): ExtendedFeedDetails {
    return ExtendedFeedDetails.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExtendedFeedDetails>, I>>(object: I): ExtendedFeedDetails {
    const message = createBaseExtendedFeedDetails();
    message.atp = object.atp ?? 0;
    message.cp = object.cp ?? 0;
    message.vtt = object.vtt ?? 0;
    message.oi = object.oi ?? 0;
    message.changeOi = object.changeOi ?? 0;
    message.lastClose = object.lastClose ?? 0;
    message.tbq = object.tbq ?? 0;
    message.tsq = object.tsq ?? 0;
    message.close = object.close ?? 0;
    message.lc = object.lc ?? 0;
    message.uc = object.uc ?? 0;
    message.yh = object.yh ?? 0;
    message.yl = object.yl ?? 0;
    message.fp = object.fp ?? 0;
    message.fv = object.fv ?? 0;
    message.mbpBuy = object.mbpBuy ?? 0;
    message.mbpSell = object.mbpSell ?? 0;
    message.tv = object.tv ?? 0;
    message.dhoi = object.dhoi ?? 0;
    message.dloi = object.dloi ?? 0;
    message.sp = object.sp ?? 0;
    message.poi = object.poi ?? 0;
    return message;
  },
};

function createBaseOHLC(): OHLC {
  return { interval: "", open: 0, high: 0, low: 0, close: 0, volume: 0, ts: 0 };
}

export const OHLC = {
  encode(message: OHLC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interval !== "") {
      writer.uint32(10).string(message.interval);
    }
    if (message.open !== 0) {
      writer.uint32(17).double(message.open);
    }
    if (message.high !== 0) {
      writer.uint32(25).double(message.high);
    }
    if (message.low !== 0) {
      writer.uint32(33).double(message.low);
    }
    if (message.close !== 0) {
      writer.uint32(41).double(message.close);
    }
    if (message.volume !== 0) {
      writer.uint32(48).int32(message.volume);
    }
    if (message.ts !== 0) {
      writer.uint32(56).int64(message.ts);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OHLC {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOHLC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.interval = reader.string();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.open = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.high = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.low = reader.double();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.close = reader.double();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.volume = reader.int32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.ts = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OHLC {
    return {
      interval: isSet(object.interval) ? globalThis.String(object.interval) : "",
      open: isSet(object.open) ? globalThis.Number(object.open) : 0,
      high: isSet(object.high) ? globalThis.Number(object.high) : 0,
      low: isSet(object.low) ? globalThis.Number(object.low) : 0,
      close: isSet(object.close) ? globalThis.Number(object.close) : 0,
      volume: isSet(object.volume) ? globalThis.Number(object.volume) : 0,
      ts: isSet(object.ts) ? globalThis.Number(object.ts) : 0,
    };
  },

  toJSON(message: OHLC): unknown {
    const obj: any = {};
    if (message.interval !== "") {
      obj.interval = message.interval;
    }
    if (message.open !== 0) {
      obj.open = message.open;
    }
    if (message.high !== 0) {
      obj.high = message.high;
    }
    if (message.low !== 0) {
      obj.low = message.low;
    }
    if (message.close !== 0) {
      obj.close = message.close;
    }
    if (message.volume !== 0) {
      obj.volume = Math.round(message.volume);
    }
    if (message.ts !== 0) {
      obj.ts = Math.round(message.ts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OHLC>, I>>(base?: I): OHLC {
    return OHLC.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OHLC>, I>>(object: I): OHLC {
    const message = createBaseOHLC();
    message.interval = object.interval ?? "";
    message.open = object.open ?? 0;
    message.high = object.high ?? 0;
    message.low = object.low ?? 0;
    message.close = object.close ?? 0;
    message.volume = object.volume ?? 0;
    message.ts = object.ts ?? 0;
    return message;
  },
};

function createBaseMarketFullFeed(): MarketFullFeed {
  return {
    ltpc: undefined,
    marketLevel: undefined,
    optionGreeks: undefined,
    marketOHLC: undefined,
    eFeedDetails: undefined,
  };
}

export const MarketFullFeed = {
  encode(message: MarketFullFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ltpc !== undefined) {
      LTPC.encode(message.ltpc, writer.uint32(10).fork()).ldelim();
    }
    if (message.marketLevel !== undefined) {
      MarketLevel.encode(message.marketLevel, writer.uint32(18).fork()).ldelim();
    }
    if (message.optionGreeks !== undefined) {
      OptionGreeks.encode(message.optionGreeks, writer.uint32(26).fork()).ldelim();
    }
    if (message.marketOHLC !== undefined) {
      MarketOHLC.encode(message.marketOHLC, writer.uint32(34).fork()).ldelim();
    }
    if (message.eFeedDetails !== undefined) {
      ExtendedFeedDetails.encode(message.eFeedDetails, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketFullFeed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketFullFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ltpc = LTPC.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketLevel = MarketLevel.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.optionGreeks = OptionGreeks.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.marketOHLC = MarketOHLC.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.eFeedDetails = ExtendedFeedDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketFullFeed {
    return {
      ltpc: isSet(object.ltpc) ? LTPC.fromJSON(object.ltpc) : undefined,
      marketLevel: isSet(object.marketLevel) ? MarketLevel.fromJSON(object.marketLevel) : undefined,
      optionGreeks: isSet(object.optionGreeks) ? OptionGreeks.fromJSON(object.optionGreeks) : undefined,
      marketOHLC: isSet(object.marketOHLC) ? MarketOHLC.fromJSON(object.marketOHLC) : undefined,
      eFeedDetails: isSet(object.eFeedDetails) ? ExtendedFeedDetails.fromJSON(object.eFeedDetails) : undefined,
    };
  },

  toJSON(message: MarketFullFeed): unknown {
    const obj: any = {};
    if (message.ltpc !== undefined) {
      obj.ltpc = LTPC.toJSON(message.ltpc);
    }
    if (message.marketLevel !== undefined) {
      obj.marketLevel = MarketLevel.toJSON(message.marketLevel);
    }
    if (message.optionGreeks !== undefined) {
      obj.optionGreeks = OptionGreeks.toJSON(message.optionGreeks);
    }
    if (message.marketOHLC !== undefined) {
      obj.marketOHLC = MarketOHLC.toJSON(message.marketOHLC);
    }
    if (message.eFeedDetails !== undefined) {
      obj.eFeedDetails = ExtendedFeedDetails.toJSON(message.eFeedDetails);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MarketFullFeed>, I>>(base?: I): MarketFullFeed {
    return MarketFullFeed.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MarketFullFeed>, I>>(object: I): MarketFullFeed {
    const message = createBaseMarketFullFeed();
    message.ltpc = (object.ltpc !== undefined && object.ltpc !== null) ? LTPC.fromPartial(object.ltpc) : undefined;
    message.marketLevel = (object.marketLevel !== undefined && object.marketLevel !== null)
      ? MarketLevel.fromPartial(object.marketLevel)
      : undefined;
    message.optionGreeks = (object.optionGreeks !== undefined && object.optionGreeks !== null)
      ? OptionGreeks.fromPartial(object.optionGreeks)
      : undefined;
    message.marketOHLC = (object.marketOHLC !== undefined && object.marketOHLC !== null)
      ? MarketOHLC.fromPartial(object.marketOHLC)
      : undefined;
    message.eFeedDetails = (object.eFeedDetails !== undefined && object.eFeedDetails !== null)
      ? ExtendedFeedDetails.fromPartial(object.eFeedDetails)
      : undefined;
    return message;
  },
};

function createBaseIndexFullFeed(): IndexFullFeed {
  return { ltpc: undefined, marketOHLC: undefined, lastClose: 0, yh: 0, yl: 0 };
}

export const IndexFullFeed = {
  encode(message: IndexFullFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ltpc !== undefined) {
      LTPC.encode(message.ltpc, writer.uint32(10).fork()).ldelim();
    }
    if (message.marketOHLC !== undefined) {
      MarketOHLC.encode(message.marketOHLC, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastClose !== 0) {
      writer.uint32(25).double(message.lastClose);
    }
    if (message.yh !== 0) {
      writer.uint32(33).double(message.yh);
    }
    if (message.yl !== 0) {
      writer.uint32(41).double(message.yl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexFullFeed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexFullFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ltpc = LTPC.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketOHLC = MarketOHLC.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.lastClose = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.yh = reader.double();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.yl = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IndexFullFeed {
    return {
      ltpc: isSet(object.ltpc) ? LTPC.fromJSON(object.ltpc) : undefined,
      marketOHLC: isSet(object.marketOHLC) ? MarketOHLC.fromJSON(object.marketOHLC) : undefined,
      lastClose: isSet(object.lastClose) ? globalThis.Number(object.lastClose) : 0,
      yh: isSet(object.yh) ? globalThis.Number(object.yh) : 0,
      yl: isSet(object.yl) ? globalThis.Number(object.yl) : 0,
    };
  },

  toJSON(message: IndexFullFeed): unknown {
    const obj: any = {};
    if (message.ltpc !== undefined) {
      obj.ltpc = LTPC.toJSON(message.ltpc);
    }
    if (message.marketOHLC !== undefined) {
      obj.marketOHLC = MarketOHLC.toJSON(message.marketOHLC);
    }
    if (message.lastClose !== 0) {
      obj.lastClose = message.lastClose;
    }
    if (message.yh !== 0) {
      obj.yh = message.yh;
    }
    if (message.yl !== 0) {
      obj.yl = message.yl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IndexFullFeed>, I>>(base?: I): IndexFullFeed {
    return IndexFullFeed.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IndexFullFeed>, I>>(object: I): IndexFullFeed {
    const message = createBaseIndexFullFeed();
    message.ltpc = (object.ltpc !== undefined && object.ltpc !== null) ? LTPC.fromPartial(object.ltpc) : undefined;
    message.marketOHLC = (object.marketOHLC !== undefined && object.marketOHLC !== null)
      ? MarketOHLC.fromPartial(object.marketOHLC)
      : undefined;
    message.lastClose = object.lastClose ?? 0;
    message.yh = object.yh ?? 0;
    message.yl = object.yl ?? 0;
    return message;
  },
};

function createBaseFullFeed(): FullFeed {
  return { marketFF: undefined, indexFF: undefined };
}

export const FullFeed = {
  encode(message: FullFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketFF !== undefined) {
      MarketFullFeed.encode(message.marketFF, writer.uint32(10).fork()).ldelim();
    }
    if (message.indexFF !== undefined) {
      IndexFullFeed.encode(message.indexFF, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FullFeed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFullFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketFF = MarketFullFeed.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.indexFF = IndexFullFeed.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FullFeed {
    return {
      marketFF: isSet(object.marketFF) ? MarketFullFeed.fromJSON(object.marketFF) : undefined,
      indexFF: isSet(object.indexFF) ? IndexFullFeed.fromJSON(object.indexFF) : undefined,
    };
  },

  toJSON(message: FullFeed): unknown {
    const obj: any = {};
    if (message.marketFF !== undefined) {
      obj.marketFF = MarketFullFeed.toJSON(message.marketFF);
    }
    if (message.indexFF !== undefined) {
      obj.indexFF = IndexFullFeed.toJSON(message.indexFF);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FullFeed>, I>>(base?: I): FullFeed {
    return FullFeed.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FullFeed>, I>>(object: I): FullFeed {
    const message = createBaseFullFeed();
    message.marketFF = (object.marketFF !== undefined && object.marketFF !== null)
      ? MarketFullFeed.fromPartial(object.marketFF)
      : undefined;
    message.indexFF = (object.indexFF !== undefined && object.indexFF !== null)
      ? IndexFullFeed.fromPartial(object.indexFF)
      : undefined;
    return message;
  },
};

function createBaseOptionChain(): OptionChain {
  return { ltpc: undefined, bidAskQuote: undefined, optionGreeks: undefined, eFeedDetails: undefined };
}

export const OptionChain = {
  encode(message: OptionChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ltpc !== undefined) {
      LTPC.encode(message.ltpc, writer.uint32(10).fork()).ldelim();
    }
    if (message.bidAskQuote !== undefined) {
      Quote.encode(message.bidAskQuote, writer.uint32(18).fork()).ldelim();
    }
    if (message.optionGreeks !== undefined) {
      OptionGreeks.encode(message.optionGreeks, writer.uint32(26).fork()).ldelim();
    }
    if (message.eFeedDetails !== undefined) {
      ExtendedFeedDetails.encode(message.eFeedDetails, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptionChain {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptionChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ltpc = LTPC.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bidAskQuote = Quote.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.optionGreeks = OptionGreeks.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.eFeedDetails = ExtendedFeedDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OptionChain {
    return {
      ltpc: isSet(object.ltpc) ? LTPC.fromJSON(object.ltpc) : undefined,
      bidAskQuote: isSet(object.bidAskQuote) ? Quote.fromJSON(object.bidAskQuote) : undefined,
      optionGreeks: isSet(object.optionGreeks) ? OptionGreeks.fromJSON(object.optionGreeks) : undefined,
      eFeedDetails: isSet(object.eFeedDetails) ? ExtendedFeedDetails.fromJSON(object.eFeedDetails) : undefined,
    };
  },

  toJSON(message: OptionChain): unknown {
    const obj: any = {};
    if (message.ltpc !== undefined) {
      obj.ltpc = LTPC.toJSON(message.ltpc);
    }
    if (message.bidAskQuote !== undefined) {
      obj.bidAskQuote = Quote.toJSON(message.bidAskQuote);
    }
    if (message.optionGreeks !== undefined) {
      obj.optionGreeks = OptionGreeks.toJSON(message.optionGreeks);
    }
    if (message.eFeedDetails !== undefined) {
      obj.eFeedDetails = ExtendedFeedDetails.toJSON(message.eFeedDetails);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OptionChain>, I>>(base?: I): OptionChain {
    return OptionChain.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OptionChain>, I>>(object: I): OptionChain {
    const message = createBaseOptionChain();
    message.ltpc = (object.ltpc !== undefined && object.ltpc !== null) ? LTPC.fromPartial(object.ltpc) : undefined;
    message.bidAskQuote = (object.bidAskQuote !== undefined && object.bidAskQuote !== null)
      ? Quote.fromPartial(object.bidAskQuote)
      : undefined;
    message.optionGreeks = (object.optionGreeks !== undefined && object.optionGreeks !== null)
      ? OptionGreeks.fromPartial(object.optionGreeks)
      : undefined;
    message.eFeedDetails = (object.eFeedDetails !== undefined && object.eFeedDetails !== null)
      ? ExtendedFeedDetails.fromPartial(object.eFeedDetails)
      : undefined;
    return message;
  },
};

function createBaseFeed(): Feed {
  return { ltpc: undefined, ff: undefined, oc: undefined };
}

export const Feed = {
  encode(message: Feed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ltpc !== undefined) {
      LTPC.encode(message.ltpc, writer.uint32(10).fork()).ldelim();
    }
    if (message.ff !== undefined) {
      FullFeed.encode(message.ff, writer.uint32(18).fork()).ldelim();
    }
    if (message.oc !== undefined) {
      OptionChain.encode(message.oc, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Feed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ltpc = LTPC.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ff = FullFeed.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.oc = OptionChain.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Feed {
    return {
      ltpc: isSet(object.ltpc) ? LTPC.fromJSON(object.ltpc) : undefined,
      ff: isSet(object.ff) ? FullFeed.fromJSON(object.ff) : undefined,
      oc: isSet(object.oc) ? OptionChain.fromJSON(object.oc) : undefined,
    };
  },

  toJSON(message: Feed): unknown {
    const obj: any = {};
    if (message.ltpc !== undefined) {
      obj.ltpc = LTPC.toJSON(message.ltpc);
    }
    if (message.ff !== undefined) {
      obj.ff = FullFeed.toJSON(message.ff);
    }
    if (message.oc !== undefined) {
      obj.oc = OptionChain.toJSON(message.oc);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Feed>, I>>(base?: I): Feed {
    return Feed.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Feed>, I>>(object: I): Feed {
    const message = createBaseFeed();
    message.ltpc = (object.ltpc !== undefined && object.ltpc !== null) ? LTPC.fromPartial(object.ltpc) : undefined;
    message.ff = (object.ff !== undefined && object.ff !== null) ? FullFeed.fromPartial(object.ff) : undefined;
    message.oc = (object.oc !== undefined && object.oc !== null) ? OptionChain.fromPartial(object.oc) : undefined;
    return message;
  },
};

function createBaseFeedResponse(): FeedResponse {
  return { type: 0, feeds: {} };
}

export const FeedResponse = {
  encode(message: FeedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    Object.entries(message.feeds).forEach(([key, value]) => {
      FeedResponse_FeedsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    console.log(reader);
    const message = createBaseFeedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = FeedResponse_FeedsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.feeds[entry2.key] = entry2.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeedResponse {
    return {
      type: isSet(object.type) ? typeFromJSON(object.type) : 0,
      feeds: isObject(object.feeds)
        ? Object.entries(object.feeds).reduce<{ [key: string]: Feed }>((acc, [key, value]) => {
          acc[key] = Feed.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: FeedResponse): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = typeToJSON(message.type);
    }
    if (message.feeds) {
      const entries = Object.entries(message.feeds);
      if (entries.length > 0) {
        obj.feeds = {};
        entries.forEach(([k, v]) => {
          obj.feeds[k] = Feed.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeedResponse>, I>>(base?: I): FeedResponse {
    return FeedResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeedResponse>, I>>(object: I): FeedResponse {
    const message = createBaseFeedResponse();
    message.type = object.type ?? 0;
    message.feeds = Object.entries(object.feeds ?? {}).reduce<{ [key: string]: Feed }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Feed.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseFeedResponse_FeedsEntry(): FeedResponse_FeedsEntry {
  return { key: "", value: undefined };
}

export const FeedResponse_FeedsEntry = {
  encode(message: FeedResponse_FeedsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Feed.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeedResponse_FeedsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedResponse_FeedsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Feed.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeedResponse_FeedsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Feed.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: FeedResponse_FeedsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Feed.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeedResponse_FeedsEntry>, I>>(base?: I): FeedResponse_FeedsEntry {
    return FeedResponse_FeedsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeedResponse_FeedsEntry>, I>>(object: I): FeedResponse_FeedsEntry {
    const message = createBaseFeedResponse_FeedsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Feed.fromPartial(object.value) : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
