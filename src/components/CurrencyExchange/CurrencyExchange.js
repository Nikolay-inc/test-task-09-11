import { useState } from 'react'
import { useGetCurrencyQuery } from '../../api/CurrencyApi'
import './CurrencyExchange.css'

function CurrencyExchange() {

  const { data, error } = useGetCurrencyQuery()
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')

  function calculateRate() {
    const arrFromInput = value.split(' ')
    if(arrFromInput && arrFromInput.length === 4 && !error) {
      const amount = arrFromInput[0]
      const fromCurrency = arrFromInput[1].toUpperCase()
      const inCurrency = arrFromInput[3].toUpperCase()
      const filteredArrFrom = data.filter(item => item.cc === fromCurrency)[0]
      const filteredArrIn = data.filter(item => item.cc === inCurrency)[0]
      const result = (amount * filteredArrFrom.rate / filteredArrIn.rate).toFixed(2)
      setResult(result)
    }
  }

  return (
    <div className="exchange-container">
      <div className="exchange-title">
        Exchange Rate
      </div>
      <div className="exchange-rules">
        * please, write down your currency and currency that you want to exchange as in example
      </div>
      <input
        type="text"
        className="input-field"
        placeholder="15 usd in uah"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={calculateRate} className="calc-button">Calculate</button>
      {
        result ?
        <div className="exchange-result">
          Your result is
          <p>{result}</p>
        </div> : null
      }
    </div>
  )
}

export default CurrencyExchange