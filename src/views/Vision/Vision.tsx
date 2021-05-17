import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const Vision: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <div>
      <Page className="home">
        <Hero>
          <Heading as="h1" size="xl" mb="24px" color="secondary">
            Vision and Mission
          </Heading>
          <Text color="#fff">{TranslateString(578, 'polygon defi finance')}</Text>
        </Hero>
      </Page>
      <div className="plantext">
        <p>Our vision is to become the leader in decentralized finance solutions on the Polygon network.
        </p>
        <br />
        <p>Our mission is to be able to provide a space to the crypto community, where investors feel safe and at the same time, generate excellent returns.
        <br />
        <br />
        <b>Accessibility:</b> Bring farming to everyone
        <br />
        <b>Governance:</b> Provide next generation, on-chain voting
        <br />
        <b>Profitability:</b> Reward long-term PEN stakeholders
        <br />
        <br />
        <br />
        1. Accessibility
        <br />
        PEN’s emission schedule was purposefully designed for a much longer period, allowing for multiple staking asset options and pools in order to reach the broader community. With an easy-to-use user interface and detailed instructions, PolyEarn is designed with accessibility and user experience in mind.
        <br />
        <br />
        2. Governance
        <br />
        Changes, improvements and additions in PolyEarn will be subject to the vote of the users of the project.
        <br />
        <br />
        3. Profitability
        <br />
        PolyEarn will utilize flexible and optimized vault strategies that support small caps tokens/coins. 
        
        </p>
      </div>      
    </div>

    
  )
}

export default Vision
