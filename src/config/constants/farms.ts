import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'PEN',
    isTokenOnly: true,
    lpAddresses: {
      137: '0x4c7b992fb450419fc0fdc95636137b0179b5c769'
    },
    tokenSymbol: 'PEN',
    tokenAddresses: {
      137: '0xb0d11ed9e814c0b1cd7b605fe5cbf35e48b12cc9'
    },
    quoteTokenSymbol: QuoteToken.PEN,
    quoteTokenAdresses: contracts.pen,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'USDC-WMATIC',
    isTokenOnly: false,
    lpAddresses: {
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827'
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'PEN-USDC',
    isTokenOnly: false,
    lpAddresses: {
      137: '0x4c7b992fb450419fc0fdc95636137b0179b5c769'
    },
    tokenSymbol: 'PEN',
    tokenAddresses: {
      137: '0xB0D11Ed9E814C0b1CD7b605Fe5CBF35e48B12CC9'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
