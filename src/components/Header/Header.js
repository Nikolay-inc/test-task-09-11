import { useState } from 'react'
import './Header.css'

function Header({currentPage, setCurrentPage}) {

  const [listTabStyle, setListTabStyle] = useState('nav-button active')
  const [exchangeTabStyle, setExchangeTabStyle] = useState('nav-button')

  function tabHandler(page) {
    setCurrentPage(page)
    if(currentPage === 'list') {
      setListTabStyle('nav-button active')
      setExchangeTabStyle('nav-button')
    } else {
      setExchangeTabStyle('nav-button active')
      setListTabStyle('nav-button')
    }
  }

  return (
    <div className="header-container">
      <div className="header">
        <div className="header-title">
          Currency Exchange
        </div>
        <div className="header-nav">
          <button onClick={() => tabHandler('exchange')} className={listTabStyle}>
            Currency Exchange
          </button>
          <button onClick={() => tabHandler('list')} className={exchangeTabStyle}>
            Currency List
          </button>
        </div>
      </div>
      <hr className="hr" />
    </div>
  )
}

export default Header