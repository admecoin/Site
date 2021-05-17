import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import Page from 'components/layout/Page'
import CardTVL from '../Components/CardTVL'
import CardPrice from '../Components/CardPrice'
import BalanceHome from '../Components/BalanceHome'
import MarketCap from '../Components/MarketCap'
import TotalBurned from '../Components/TotalBurned'
import TotalMinted from '../Components/TotalMinted'
import Prices from '../Components/Prices'



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

const HomeSingle: React.FC = () => {
  const TranslateString = useI18n()

  return ( 
    <div className="homesingle">
       {/* <div id="twitter-ann" className="ann-hide">
        <img className="twitter-icon" src="/images/tw.png" alt="Announcements" width="50px" height="50px" />
        <div>
                <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="PolyEarn"
                            options={{height: 640}}
                            />
            </div>
      </div>  */}
      
      <Page className="home">
        <Hero>
          <Heading as="h1" size="xl" mb="24px" color="secondary">
            {TranslateString(576, 'POLYEARN')}
          </Heading>
          <Text color="#fff">{TranslateString(578, 'polygon defi finance')}</Text>
        </Hero>
      </Page>
      <div className="info">
        
        <CardTVL />
        <CardPrice />
        <BalanceHome />
        <MarketCap />
        <TotalBurned />
        <TotalMinted />
      </div>
      <div className="subtitle">Our Services</div>
      <div className="services">
        <div className="service">
            <span className="title">Liquidity Pools</span>
            <br />
            <div>
                Safely earn free, passive income from your idle assets.
                <br />
                <a className="btn" href="/pools">Launch</a>
            </div>
        </div>
        <div className="service">
            <span className="title">Farms</span>
            <br />
            <div>
                Generates passive income by integrating liquidity token.
                <br />
                <a className="btn" href="/farms">Launch</a>
            </div>
        </div>
      </div>
      <div className="subtitle">Our Games</div>
      <div className="services">
        <div className="service">
            <img src="/images/comming.png" alt="" className="comming" />
            <span className="title">Lottery</span>
            <br />
            <div>
                Buy a lottery card and win PEN
                <br />
                <a className="btn disabled-button" href="/">Launch</a>
            </div>
        </div>
        <div className="service">
            <img src="/images/comming.png" alt="" className="comming" />
            <span className="title">Predictions</span>
            <br />
            <div>
                Predict whether the price of different assets will rise or fall.
                <br />
                <a className="btn disabled-button" href="/">Launch</a>
            </div>
        </div>
      </div>
      
    </div>

    
  )
}

export default HomeSingle
