import React from 'react'
import './CurrencyItem.css'

function CurrencyItem({cc, txt, rate, r030, clickHandler, textButton}) {
  return (
    <div className="currency-item">
      <div className="currency-label">{cc}</div>
      <div className="currency-name">{txt}</div>
      <div className="currency-rate">{rate}</div>
      <div className="add-favourite">
      <button onClick={() => clickHandler(r030)}>{textButton}</button>
      </div>
    </div>
  )
}

export default CurrencyItem