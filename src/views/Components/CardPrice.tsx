import React from 'react'
import useI18n from 'hooks/useI18n'
import { usePriceCakeBusd } from 'state/hooks'
import CardValue from '../Home/components/CardValue'

const CardPrice: React.FC = () => {
    const TranslateString = useI18n()
    const cakePriceUsd = usePriceCakeBusd()
    return (
        <div className="card">
            <div className="title">
            PEN Price
            </div>
            <div className="desc">
                <CardValue fontSize="28px" value={cakePriceUsd.toNumber()} prefix="$" decimals={3}/>
            </div>
        </div>
    )
}
export default CardPrice