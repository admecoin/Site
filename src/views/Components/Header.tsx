import React from 'react'
import useI18n from 'hooks/useI18n'

const Header: React.FC = () => {
    const TranslateString = useI18n()

    return (
      <header>
        <img className="logo-header" src="/images/PEN_383.png" alt="" />
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
              <a id="nests" className="smoothscroll" href="/nests">
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