import React from 'react'
import useI18n from 'hooks/useI18n'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from '../Home/components/CardValue'
import { useFarms, usePriceCakeBusd } from '../../state/hooks'

const MarketCap: React.FC = () => {
    const TranslateString = useI18n()
    const totalSupply = useTotalSupply()
    const burnedBalance = useBurnedBalance(getCakeAddress())
    const eggPrice = usePriceCakeBusd();
    const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
    const cakeSupply = getBalanceNumber(circSupply);
    const marketCap = eggPrice.times(circSupply);
  
    return (
        <div className="card">
            <div className="title">
                Market Cap
            </div>
            <div className="desc">
                <CardValue fontSize="28px" value={getBalanceNumber(marketCap)}  prefix="$" decimals={2}/>
            </div>
        </div>
    )
}
export default MarketCap