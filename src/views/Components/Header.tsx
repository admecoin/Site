import React, {useEffect} from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import Menu from '../../components/Menu'

const Header: React.FC = () => {
    const TranslateString = useI18n()
    const { account, connect } = useWallet()
    useEffect(() => {
      if (!account && window.localStorage.getItem('accountStatus')) {
        connect('injected')
      }
    }, [account, connect])
    
    return (
      <header>

        <img className="logo-header" src="/images/PEN_383.png" alt="" />
        <div className="title-logo">PolyEarn</div>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a id="home" className="smoothscroll" href="/">
                Home
              </a>
            </li>
            
            <li>
              <a className="smoothscroll" rel="noreferrer" target="_blank" href="https://quickswap.exchange/#/swap?outputCurrency=">
                Exchange
              </a>
            </li>
            <li>
              <a id="farms" className="smoothscroll" href="/farms">
                  Farms
              </a>
            </li>
            <li>
              <a id="pools" className="smoothscroll" href="/pools">
                  Pools
              </a>
            </li>
            <li>
              <img src="/images/soon.png" alt="" className="soon" />
              <a className="smoothscroll disabled-button" href="/">
                  Lottery
              </a>
            </li>
            <li>
              <img src="/images/soon.png" alt="" className="soon" />
              <a className="smoothscroll disabled-button" href="/">
                  Predictions
              </a>
            </li>
          </ul>
        </nav>
        </header>
    )
}
export default Header