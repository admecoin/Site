import React from 'react'
import BigNumber from 'bignumber.js/bignumber'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getPenAddress } from 'utils/addressHelpers'
import { useFarms, usePricePenBusd } from 'state/hooks'
import CardValue from '../Home/components/CardValue'

const BalanceHome: React.FC = () => {
    const TranslateString = useI18n()
    const totalSupply = useTotalSupply()
    const burnedBalance = useBurnedBalance(getPenAddress())
    const farms = useFarms();
    const penPrice = usePricePenBusd();
    const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
    const penSupply = getBalanceNumber(circSupply);
    const marketCap = penPrice.times(circSupply);
  
    return (
        <div className="card">
            <div className="title">
                Total Minted
            </div>
            <div className="desc">
                <CardValue fontSize="28px" value={getBalanceNumber(totalSupply)} prefix="" decimals={2}/>
            </div>
        </div>
    )
}
export default BalanceHome 