import React from 'react'
import useI18n from 'hooks/useI18n'

const Header: React.FC = () => {
    const TranslateString = useI18n()

    return (
      <header>
        <img className="logo-header" src="/images/logo.png" alt="" />
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="/">
                Home
              </a>
            </li>
            
            <li>
              <a className="smoothscroll" href="/">
                Exchange
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="/farms">
                  Farms
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="/nests">
                  Pools
              </a>
            </li>
            <li>
              <img src="/images/soon.png" alt="" className="soon" />
              <a className="smoothscroll" href="/">
                  Lottery
              </a>
            </li>
            <li>
              <img src="/images/soon.png" alt="" className="soon" />
              <a className="smoothscroll" href="/">
                  Predictions
              </a>
            </li>
          </ul>
        </nav>
        </header>
    )
}
export default Header