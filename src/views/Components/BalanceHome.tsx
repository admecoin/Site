import React from 'react'
import BigNumber from 'bignumber.js/bignumber'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import { useFarms, usePriceCakeBusd } from 'state/hooks'
import CardValue from '../Home/components/CardValue'

const BalanceHome: React.FC = () => {
    const TranslateString = useI18n()
    const totalSupply = useTotalSupply()
    const burnedBalance = useBurnedBalance(getCakeAddress())
    const farms = useFarms();
    const eggPrice = usePriceCakeBusd();
    const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
    const cakeSupply = getBalanceNumber(circSupply);
    const marketCap = eggPrice.times(circSupply);
  
    return (
        <div className="card">
            <div className="title">
                Max Supply
            </div>
            <div className="desc">
                <CardValue fontSize="28px" value={cakeSupply} prefix="$" decimals={0}/>
            </div>
        </div>
    )
}
export default BalanceHome 