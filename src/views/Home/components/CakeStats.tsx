import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getPenAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePricePenBusd } from '../../../state/hooks'

const StyledPenStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const PenStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getPenAddress())
  const farms = useFarms();
  const penPrice = usePricePenBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const penSupply = getBalanceNumber(circSupply);
  const marketCap = penPrice.times(circSupply);

  let tokensPerBlock = 0;
  if(farms && farms[0] && farms[0].tokensPerBlock){
    tokensPerBlock = new BigNumber(farms[0].tokensPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledPenStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'PEN Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total Minted')}</Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(10004, 'Circulating Supply')}</Text>
          {penSupply && <CardValue fontSize="14px" value={penSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New PEN/block')}</Text>
          <Text bold fontSize="14px">{tokensPerBlock}</Text>
        </Row>
      </CardBody>
    </StyledPenStats>
  )
}

export default PenStats
