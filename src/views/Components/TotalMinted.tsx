import React from 'react'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTotalValue } from '../../state/hooks'
import CardValue from '../Home/components/CardValue'

const TotalMinted: React.FC = () => {
    const TranslateString = useI18n()
    const totalValue = useTotalValue();
    const totalSupply = useTotalSupply()
  
    return (
        <div className="card">
            <div className="title">
            Total Minted
            </div>
            <div className="desc">
                <CardValue fontSize="28px" value={getBalanceNumber(totalSupply)} prefix="" decimals={0}/>
            </div>
        </div>
    )
}
export default TotalMinted