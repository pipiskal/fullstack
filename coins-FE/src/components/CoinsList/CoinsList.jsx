import { Wrapper } from "./CoinsList.styles";
import CoinPriceCard from "../CoinPriceCard/CoinPriceCard";
import { CURRENCY_SYMBOL } from "../../common/consts";

const COINS = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    current_price: 91591,
    high_24h: 91745,
    low_24h: 91212,
    price_change_percentage_24h: 0.37253,
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    current_price: 3421.75,
    high_24h: 3489.2,
    low_24h: 3398.1,
    price_change_percentage_24h: -1.24567,
  },
  {
    id: "tether",
    symbol: "usdt",
    name: "Tether",
    image:
      "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
    current_price: 1.001,
    high_24h: 1.003,
    low_24h: 0.999,
    price_change_percentage_24h: 0.08912,
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image:
      "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
    current_price: 681.34,
    high_24h: 695.78,
    low_24h: 672.15,
    price_change_percentage_24h: 2.15678,
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    image:
      "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1696504756",
    current_price: 189.42,
    high_24h: 194.67,
    low_24h: 185.23,
    price_change_percentage_24h: -2.34891,
  },
  {
    id: "xrp",
    symbol: "xrp",
    name: "XRP",
    image:
      "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
    current_price: 2.18,
    high_24h: 2.25,
    low_24h: 2.14,
    price_change_percentage_24h: 1.89234,
  },
  {
    id: "usd-coin",
    symbol: "usdc",
    name: "USDC",
    image:
      "https://coin-images.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1696506694",
    current_price: 0.9998,
    high_24h: 1.0021,
    low_24h: 0.9995,
    price_change_percentage_24h: -0.12345,
  },
  {
    id: "cardano",
    symbol: "ada",
    name: "Cardano",
    image:
      "https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090",
    current_price: 0.8967,
    high_24h: 0.9145,
    low_24h: 0.8834,
    price_change_percentage_24h: 3.45678,
  },
  {
    id: "dogecoin",
    symbol: "doge",
    name: "Dogecoin",
    image:
      "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
    current_price: 0.3789,
    high_24h: 0.3856,
    low_24h: 0.3723,
    price_change_percentage_24h: -1.76543,
  },
  {
    id: "avalanche-2",
    symbol: "avax",
    name: "Avalanche",
    image:
      "https://coin-images.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1696512369",
    current_price: 42.78,
    high_24h: 44.23,
    low_24h: 41.89,
    price_change_percentage_24h: 4.12567,
  },
  {
    id: "chainlink",
    symbol: "link",
    name: "Chainlink",
    image:
      "https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",
    current_price: 24.56,
    high_24h: 25.12,
    low_24h: 24.01,
    price_change_percentage_24h: -3.21098,
  },
  {
    id: "tron",
    symbol: "trx",
    name: "TRON",
    image:
      "https://coin-images.coingecko.com/coins/images/1094/large/tron-logo.png?1696502193",
    current_price: 0.2456,
    high_24h: 0.2489,
    low_24h: 0.2423,
    price_change_percentage_24h: 1.67891,
  },
  {
    id: "polkadot",
    symbol: "dot",
    name: "Polkadot",
    image:
      "https://coin-images.coingecko.com/coins/images/12171/large/polkadot.png?1696511929",
    current_price: 7.89,
    high_24h: 8.12,
    low_24h: 7.67,
    price_change_percentage_24h: -2.89345,
  },
  {
    id: "matic-network",
    symbol: "matic",
    name: "Polygon",
    image:
      "https://coin-images.coingecko.com/coins/images/4713/large/matic-token-icon.png?1696505277",
    current_price: 0.5678,
    high_24h: 0.5823,
    low_24h: 0.5534,
    price_change_percentage_24h: 2.78912,
  },
  {
    id: "litecoin",
    symbol: "ltc",
    name: "Litecoin",
    image:
      "https://coin-images.coingecko.com/coins/images/2/large/litecoin.png?1696501400",
    current_price: 106.78,
    high_24h: 109.45,
    low_24h: 104.23,
    price_change_percentage_24h: -1.45678,
  },
  {
    id: "shiba-inu",
    symbol: "shib",
    name: "Shiba Inu",
    image:
      "https://coin-images.coingecko.com/coins/images/11939/large/shiba.png?1696511800",
    current_price: 0.00002345,
    high_24h: 0.00002398,
    low_24h: 0.00002289,
    price_change_percentage_24h: 5.6789,
  },
  {
    id: "uniswap",
    symbol: "uni",
    name: "Uniswap",
    image:
      "https://coin-images.coingecko.com/coins/images/12504/large/uniswap-uni.png?1696512319",
    current_price: 12.45,
    high_24h: 12.89,
    low_24h: 12.01,
    price_change_percentage_24h: -3.45671,
  },
  {
    id: "bitcoin-cash",
    symbol: "bch",
    name: "Bitcoin Cash",
    image:
      "https://coin-images.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1696501932",
    current_price: 498.76,
    high_24h: 512.34,
    low_24h: 485.67,
    price_change_percentage_24h: 1.98765,
  },
  {
    id: "wrapped-bitcoin",
    symbol: "wbtc",
    name: "Wrapped Bitcoin",
    image:
      "https://coin-images.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857",
    current_price: 91456.78,
    high_24h: 91678.9,
    low_24h: 91234.56,
    price_change_percentage_24h: 0.23456,
  },
  {
    id: "dai",
    symbol: "dai",
    name: "Dai",
    image:
      "https://coin-images.coingecko.com/coins/images/9956/large/Badge_Dai.png?1696509996",
    current_price: 1.0012,
    high_24h: 1.0034,
    low_24h: 0.9998,
    price_change_percentage_24h: -0.08912,
  },
  {
    id: "leo-token",
    symbol: "leo",
    name: "LEO Token",
    image:
      "https://coin-images.coingecko.com/coins/images/8418/large/leo-token.png?1696508607",
    current_price: 8.45,
    high_24h: 8.67,
    low_24h: 8.23,
    price_change_percentage_24h: -2.67891,
  },
  {
    id: "cosmos",
    symbol: "atom",
    name: "Cosmos",
    image:
      "https://coin-images.coingecko.com/coins/images/1481/large/cosmos_hub.png?1696502525",
    current_price: 6.78,
    high_24h: 7.01,
    low_24h: 6.56,
    price_change_percentage_24h: 3.78912,
  },
  {
    id: "near",
    symbol: "near",
    name: "NEAR Protocol",
    image:
      "https://coin-images.coingecko.com/coins/images/10365/large/near.jpg?1696510367",
    current_price: 5.67,
    high_24h: 5.89,
    low_24h: 5.45,
    price_change_percentage_24h: -4.23456,
  },
  {
    id: "ethereum-classic",
    symbol: "etc",
    name: "Ethereum Classic",
    image:
      "https://coin-images.coingecko.com/coins/images/453/large/ethereum-classic-logo.png?1696501717",
    current_price: 34.56,
    high_24h: 35.78,
    low_24h: 33.89,
    price_change_percentage_24h: 1.45678,
  },
  {
    id: "monero",
    symbol: "xmr",
    name: "Monero",
    image:
      "https://coin-images.coingecko.com/coins/images/69/large/monero_logo.png?1696501460",
    current_price: 187.45,
    high_24h: 192.34,
    low_24h: 183.67,
    price_change_percentage_24h: -2.78912,
  },
  {
    id: "stellar",
    symbol: "xlm",
    name: "Stellar",
    image:
      "https://coin-images.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1696501482",
    current_price: 0.3456,
    high_24h: 0.3578,
    low_24h: 0.3334,
    price_change_percentage_24h: 2.34567,
  },
  {
    id: "okb",
    symbol: "okb",
    name: "OKB",
    image:
      "https://coin-images.coingecko.com/coins/images/4463/large/WeChat_Image_20220118095654.png?1696505053",
    current_price: 56.78,
    high_24h: 58.45,
    low_24h: 55.23,
    price_change_percentage_24h: -3.67891,
  },
  {
    id: "filecoin",
    symbol: "fil",
    name: "Filecoin",
    image:
      "https://coin-images.coingecko.com/coins/images/12817/large/filecoin.png?1696512609",
    current_price: 6.45,
    high_24h: 6.78,
    low_24h: 6.23,
    price_change_percentage_24h: 4.56789,
  },
  {
    id: "aptos",
    symbol: "apt",
    name: "Aptos",
    image:
      "https://coin-images.coingecko.com/coins/images/26455/large/aptos_round.png?1696525528",
    current_price: 12.34,
    high_24h: 12.89,
    low_24h: 11.98,
    price_change_percentage_24h: -1.89234,
  },
  {
    id: "hedera-hashgraph",
    symbol: "hbar",
    name: "Hedera",
    image:
      "https://coin-images.coingecko.com/coins/images/3441/large/Hedera_Hashgraph_logo.png?1696504364",
    current_price: 0.2789,
    high_24h: 0.2856,
    low_24h: 0.2723,
    price_change_percentage_24h: 3.12345,
  },
  {
    id: "vechain",
    symbol: "vet",
    name: "VeChain",
    image:
      "https://coin-images.coingecko.com/coins/images/1167/large/VeChain-Logo-768x725.png?1696502268",
    current_price: 0.04567,
    high_24h: 0.04689,
    low_24h: 0.04445,
    price_change_percentage_24h: -2.45678,
  },
  {
    id: "internet-computer",
    symbol: "icp",
    name: "Internet Computer",
    image:
      "https://coin-images.coingecko.com/coins/images/14495/large/Internet_Computer_logo.png?1696514180",
    current_price: 11.23,
    high_24h: 11.78,
    low_24h: 10.89,
    price_change_percentage_24h: 5.23456,
  },
  {
    id: "maker",
    symbol: "mkr",
    name: "Maker",
    image:
      "https://coin-images.coingecko.com/coins/images/1364/large/Mark_Maker.png?1696502423",
    current_price: 1567.89,
    high_24h: 1598.45,
    low_24h: 1534.67,
    price_change_percentage_24h: -3.78912,
  },
  {
    id: "arbitrum",
    symbol: "arb",
    name: "Arbitrum",
    image:
      "https://coin-images.coingecko.com/coins/images/16547/large/photo_2023-03-29_21.47.00.jpeg?1696516109",
    current_price: 0.8934,
    high_24h: 0.9156,
    low_24h: 0.8723,
    price_change_percentage_24h: 1.67891,
  },
  {
    id: "optimism",
    symbol: "op",
    name: "Optimism",
    image:
      "https://coin-images.coingecko.com/coins/images/25244/large/Optimism.png?1696524385",
    current_price: 2.45,
    high_24h: 2.56,
    low_24h: 2.34,
    price_change_percentage_24h: -4.12345,
  },
  {
    id: "render-token",
    symbol: "rndr",
    name: "Render",
    image:
      "https://coin-images.coingecko.com/coins/images/11636/large/rndr.png?1696511529",
    current_price: 7.89,
    high_24h: 8.23,
    low_24h: 7.56,
    price_change_percentage_24h: 2.78912,
  },
  {
    id: "thorchain",
    symbol: "rune",
    name: "THORChain",
    image:
      "https://coin-images.coingecko.com/coins/images/6595/large/RUNE.png?1696506922",
    current_price: 6.78,
    high_24h: 7.01,
    low_24h: 6.56,
    price_change_percentage_24h: -2.34567,
  },
  {
    id: "injective-protocol",
    symbol: "inj",
    name: "Injective",
    image:
      "https://coin-images.coingecko.com/coins/images/12882/large/Secondary_Symbol.png?1696512670",
    current_price: 23.45,
    high_24h: 24.78,
    low_24h: 22.89,
    price_change_percentage_24h: 3.45678,
  },
  {
    id: "kaspa",
    symbol: "kas",
    name: "Kaspa",
    image:
      "https://coin-images.coingecko.com/coins/images/25751/large/kaspa-icon-exchanges.png?1696524837",
    current_price: 0.1234,
    high_24h: 0.1289,
    low_24h: 0.1198,
    price_change_percentage_24h: -5.67891,
  },
  {
    id: "bittensor",
    symbol: "tao",
    name: "Bittensor",
    image:
      "https://coin-images.coingecko.com/coins/images/28452/large/tao.png?1696527421",
    current_price: 567.89,
    high_24h: 589.45,
    low_24h: 545.67,
    price_change_percentage_24h: 1.89234,
  },
  {
    id: "mantle",
    symbol: "mnt",
    name: "Mantle",
    image:
      "https://coin-images.coingecko.com/coins/images/30980/large/token-logo.png?1696529819",
    current_price: 1.23,
    high_24h: 1.28,
    low_24h: 1.19,
    price_change_percentage_24h: -3.12345,
  },
  {
    id: "fantom",
    symbol: "ftm",
    name: "Fantom",
    image:
      "https://coin-images.coingecko.com/coins/images/4001/large/Fantom_round.png?1696504642",
    current_price: 0.7891,
    high_24h: 0.8156,
    low_24h: 0.7634,
    price_change_percentage_24h: 4.23456,
  },
  {
    id: "first-digital-usd",
    symbol: "fdusd",
    name: "First Digital USD",
    image:
      "https://coin-images.coingecko.com/coins/images/31079/large/firstfigital.jpeg?1696529912",
    current_price: 0.9998,
    high_24h: 1.0012,
    low_24h: 0.9985,
    price_change_percentage_24h: -0.15678,
  },
  {
    id: "immutable-x",
    symbol: "imx",
    name: "Immutable",
    image:
      "https://coin-images.coingecko.com/coins/images/17233/large/immutableX-symbol-BLK-RGB.png?1696516787",
    current_price: 1.67,
    high_24h: 1.78,
    low_24h: 1.56,
    price_change_percentage_24h: -2.67891,
  },
  {
    id: "cronos",
    symbol: "cro",
    name: "Cronos",
    image:
      "https://coin-images.coingecko.com/coins/images/7310/large/cro_token_logo.png?1696507599",
    current_price: 0.1789,
    high_24h: 0.1845,
    low_24h: 0.1734,
    price_change_percentage_24h: 2.45678,
  },
  {
    id: "stacks",
    symbol: "stx",
    name: "Stacks",
    image:
      "https://coin-images.coingecko.com/coins/images/2069/large/Stacks_logo_full.png?1696503016",
    current_price: 2.89,
    high_24h: 3.01,
    low_24h: 2.76,
    price_change_percentage_24h: -4.56789,
  },
  {
    id: "the-graph",
    symbol: "grt",
    name: "The Graph",
    image:
      "https://coin-images.coingecko.com/coins/images/13397/large/Graph_Token.png?1696513159",
    current_price: 0.2345,
    high_24h: 0.2456,
    low_24h: 0.2234,
    price_change_percentage_24h: 3.78912,
  },
  {
    id: "lido-staked-ether",
    symbol: "steth",
    name: "Lido Staked ETH",
    image:
      "https://coin-images.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206",
    current_price: 3415.67,
    high_24h: 3478.9,
    low_24h: 3389.45,
    price_change_percentage_24h: -1.12345,
  },
  {
    id: "rocket-pool-eth",
    symbol: "reth",
    name: "Rocket Pool ETH",
    image:
      "https://coin-images.coingecko.com/coins/images/20764/large/reth.png?1696520159",
    current_price: 3789.45,
    high_24h: 3856.78,
    low_24h: 3723.12,
    price_change_percentage_24h: 1.78912,
  },
  {
    id: "sei-network",
    symbol: "sei",
    name: "Sei",
    image:
      "https://coin-images.coingecko.com/coins/images/28205/large/Sei_Logo_-_Transparent.png?1696527207",
    current_price: 0.4567,
    high_24h: 0.4789,
    low_24h: 0.4345,
    price_change_percentage_24h: -3.45678,
  },
  {
    id: "algorand",
    symbol: "algo",
    name: "Algorand",
    image:
      "https://coin-images.coingecko.com/coins/images/4380/large/download.png?1696504978",
    current_price: 0.3789,
    high_24h: 0.3912,
    low_24h: 0.3667,
    price_change_percentage_24h: 2.67891,
  },
  {
    id: "aave",
    symbol: "aave",
    name: "Aave",
    image:
      "https://coin-images.coingecko.com/coins/images/12645/large/AAVE.png?1696512452",
    current_price: 345.67,
    high_24h: 356.78,
    low_24h: 334.56,
    price_change_percentage_24h: -1.67891,
  },
  {
    id: "pepe",
    symbol: "pepe",
    name: "Pepe",
    image:
      "https://coin-images.coingecko.com/coins/images/29850/large/pepe-token.jpeg?1696528776",
    current_price: 0.00001789,
    high_24h: 0.00001845,
    low_24h: 0.00001734,
    price_change_percentage_24h: 4.78912,
  },
  {
    id: "flow",
    symbol: "flow",
    name: "Flow",
    image:
      "https://coin-images.coingecko.com/coins/images/13446/large/5f6294c0c7a8cda55cb1c936_Flow_Wordmark.png?1696513210",
    current_price: 0.8912,
    high_24h: 0.9234,
    low_24h: 0.8678,
    price_change_percentage_24h: -2.89345,
  },
  {
    id: "theta-token",
    symbol: "theta",
    name: "Theta Network",
    image:
      "https://coin-images.coingecko.com/coins/images/2538/large/theta-fuel-logo.png?1696503622",
    current_price: 2.34,
    high_24h: 2.45,
    low_24h: 2.23,
    price_change_percentage_24h: 3.56789,
  },
  {
    id: "sandbox",
    symbol: "sand",
    name: "The Sandbox",
    image:
      "https://coin-images.coingecko.com/coins/images/12129/large/sandbox_logo.jpg?1696511971",
    current_price: 0.5678,
    high_24h: 0.5912,
    low_24h: 0.5445,
    price_change_percentage_24h: -4.12356,
  },
  {
    id: "flare-networks",
    symbol: "flr",
    name: "Flare",
    image:
      "https://coin-images.coingecko.com/coins/images/28624/large/FLR-icon200x200.png?1696527609",
    current_price: 0.02345,
    high_24h: 0.02456,
    low_24h: 0.02234,
    price_change_percentage_24h: 1.23456,
  },
  {
    id: "bitcoin-sv",
    symbol: "bsv",
    name: "Bitcoin SV",
    image:
      "https://coin-images.coingecko.com/coins/images/6799/large/BSV.png?1696507058",
    current_price: 78.45,
    high_24h: 81.23,
    low_24h: 76.78,
    price_change_percentage_24h: -5.23456,
  },
  {
    id: "iota",
    symbol: "iota",
    name: "IOTA",
    image:
      "https://coin-images.coingecko.com/coins/images/692/large/IOTA_Swirl.png?1696501890",
    current_price: 0.3456,
    high_24h: 0.3612,
    low_24h: 0.3312,
    price_change_percentage_24h: 2.78912,
  },
  {
    id: "axie-infinity",
    symbol: "axs",
    name: "Axie Infinity",
    image:
      "https://coin-images.coingecko.com/coins/images/13029/large/axie_infinity_logo.png?1696512817",
    current_price: 7.89,
    high_24h: 8.23,
    low_24h: 7.56,
    price_change_percentage_24h: -3.67891,
  },
  {
    id: "renzo",
    symbol: "rez",
    name: "Renzo",
    image:
      "https://coin-images.coingecko.com/coins/images/36161/large/renzo.png?1710834737",
    current_price: 0.0567,
    high_24h: 0.0589,
    low_24h: 0.0545,
    price_change_percentage_24h: 4.45678,
  },
  {
    id: "tezos",
    symbol: "xtz",
    name: "Tezos",
    image:
      "https://coin-images.coingecko.com/coins/images/976/large/Tezos-logo.png?1696502091",
    current_price: 1.23,
    high_24h: 1.28,
    low_24h: 1.19,
    price_change_percentage_24h: -1.45678,
  },
  {
    id: "decentraland",
    symbol: "mana",
    name: "Decentraland",
    image:
      "https://coin-images.coingecko.com/coins/images/878/large/decentraland-mana.png?1696502010",
    current_price: 0.6789,
    high_24h: 0.7012,
    low_24h: 0.6567,
    price_change_percentage_24h: 3.23456,
  },
  {
    id: "eos",
    symbol: "eos",
    name: "EOS",
    image:
      "https://coin-images.coingecko.com/coins/images/738/large/eos-eos-logo.png?1696501963",
    current_price: 0.8912,
    high_24h: 0.9234,
    low_24h: 0.8678,
    price_change_percentage_24h: -2.56789,
  },
];

const CoinsList = () => {
  return (
    <Wrapper>
      {COINS.map((coin) => {
        const hasPositivePriceChangeTheLast24Hours =
          coin.price_change_percentage_24h > 0;

        const last24$HoursPercentage = Number(
          coin.price_change_percentage_24h.toFixed(2)
        );

        return (
          <CoinPriceCard
            name={coin.name}
            image={coin.image}
            shortName={coin.symbol}
            currencySymbol={CURRENCY_SYMBOL}
            currentPrice={coin.current_price}
            highestTwentyFourHourPrice={coin.high_24h}
            LowestTwentyFourHourPrice={coin.low_24h}
            twentyFourPriceChangePercentage={{
              isPositive: hasPositivePriceChangeTheLast24Hours,
              percentage: last24$HoursPercentage,
            }}
          />
        );
      })}
    </Wrapper>
  );
};

export default CoinsList;
