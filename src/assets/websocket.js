const protobuf = require("protobufjs");

// Initialize global variables

// Function to authorize the market data feed

// Function to initialize the protobuf part
export async function initProtobuf() {
  let protobufRoot = await protobuf.load(__dirname + "/MarketDataFeed.proto");
  console.log("Protobuf part initialization complete");
  return protobufRoot;
};

// Function to decode protobuf message
export async function decodeProfobuf (buffer, protobufRoot) {
  if (!protobufRoot) {
    console.warn("Protobuf part not initialized yet!");
    return null;
  }

  const FeedResponse = protobufRoot.lookupType(
    "com.upstox.marketdatafeeder.rpc.proto.FeedResponse"
  );
  return FeedResponse.decode(buffer);
};

// Initialize the protobuf part and establish the WebSocket connection
// (async () => {
//   try {
//     await initProtobuf(); // Initialize protobuf
//     const wsUrl = await getMarketFeedUrl(); // Get the market feed URL
//     const ws = await connectWebSocket(wsUrl); // Connect to the WebSocket
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// })();