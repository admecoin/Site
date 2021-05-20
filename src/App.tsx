import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import PageLoader from './components/PageLoader'
// import NftGlobalNotification from './views/Nft/components/NftGlobalNotification'
import Header from './views/Components/Header'
import Footer from './views/Components/Footer'
import Vision from './views/Vision'
import Audits from './views/Audits'
// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const HomeSingle = lazy(() => import('./views/HomeSingle'))
const Farms = lazy(() => import('./views/Farms'))
// const Lottery = lazy(() => import('./views/Lottery'))
// const Pools = lazy(() => import('./views/Pools'))
// const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
// const Nft = lazy(() => import('./views/Nft'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

  useFetchPublicData()

  return (
    <div>
      <div>
        <Header />
      </div>
      <Router>
        <Menu />
        <ResetCSS />
        <GlobalStyle />
      
          <Suspense fallback={<PageLoader />}>
            <Switch>
              <Route path="/" exact>
                <HomeSingle />
              </Route>
              <Route path="/farms" exact>
                <Farms />
              </Route>
              <Route path="/pools" exact>
                <Farms tokenMode/>
              </Route>
              <Route path="/vision" exact>
                <Vision />
              </Route>
              <Route path="/audits" exact>
                <Audits />
              </Route>
              {/* <Route path="/pools"> */}
              {/*  <Pools /> */}
              {/* </Route> */}
              {/* <Route path="/lottery"> */}
              {/*  <Lottery /> */}
              {/* </Route> */}
              {/* <Route path="/ifo"> */}
              {/*  <Ifos /> */}
              {/* </Route> */}
              {/* <Route path="/nft"> */}
              {/*  <Nft /> */}
              {/* </Route> */}
              {/* Redirect */}
              {/* <Route path="/staking"> */}
              {/*  <Redirect to="/pools" /> */}
              {/* </Route> */}
              {/* <Route path="/syrup"> */}
              {/*  <Redirect to="/pools" /> */}
              {/* </Route> */}
              {/* 404 */}
              <Route component={NotFound} />
            </Switch>
          </Suspense>
      
        {/* <NftGlobalNotification /> */}
      </Router>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default React.memo(App)
