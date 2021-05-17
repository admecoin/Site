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

const Audits: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <div>
      <Page className="home">
        <Hero>
          <Heading as="h1" size="xl" mb="24px" color="secondary">
            Audits
          </Heading>
          <Text color="#fff">{TranslateString(578, 'polygon defi finance')}</Text>
        </Hero>
      </Page>
      <div className="plantext">
        <p>This section will be used to show the audits carried out on our different products. At this time, we are contacting audit providers in order to bring the greatest possible peace of mind to our investors.
        </p>
        
      </div>      
    </div>

    
  )
}

export default Audits
