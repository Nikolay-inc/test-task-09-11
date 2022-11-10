import { useEffect, useState } from 'react'
import { useGetCurrencyQuery } from '../../api/CurrencyApi'
import CurrencyItem from '../CurrencyItem/CurrencyItem'
import './CurrencyList.css'

function CurrencyList() {

  const { data, error, isLoading } = useGetCurrencyQuery()
  const [localData, setLocalData] = useState([])
  const [favouriteItems, setFavouriteitems] = useState([])
  const [baseCurrency, setBaseCurrency] = useState('UAH')

  useEffect(() => {
    if(!error && !isLoading) {
      setLocalData(data.map(item => ({...item})))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, isLoading])

  function addToFavourites(id) {
    const filteredArr = localData.filter((item) => {
      return item.r030 === id
    })
    setFavouriteitems([...favouriteItems, ...filteredArr])
    const restArr = localData.filter(item => item !== filteredArr[0])
    setLocalData(restArr)
  }

  function removeFromFavourites(id) {
    const filteredArr = favouriteItems.filter((item) => {
      return item.r030 === id
    })
    setLocalData([...localData, ...filteredArr])
    const restArr = favouriteItems.filter(item => item !== filteredArr[0])
    setFavouriteitems(restArr)
  }

  function handleBaseCurrency(e) {
    setBaseCurrency(e.target.value)
    const selectedCurrency = localData.filter(item => {
      return item.cc === e.target.value
    })[0]
    console.log('selectedCurrency', selectedCurrency)
    localData.forEach(item => {
      return item.rate = (item.rate / selectedCurrency.rate).toFixed(3)
    })
    setLocalData(localData)
  }

  return (
    <div className="list-container">
      <div className="base-currency-container">
        <p>Base Currency</p>
        <select
          className="currency-select"
          value={baseCurrency}
          onChange={handleBaseCurrency}
        >
          <option value='UAH'>Украинская Гривна</option>
          {
            data && data.map(({cc, txt, r030}) =>
              <option key={r030} value={cc}>{txt}</option>
            )
          }
        </select>
      </div>
      <div className="favourites">
        <div className="list-header">Favourites</div>
        <div className="favourites-list">
          {
            favouriteItems.length >= 1 ?
            favouriteItems.map(({cc, txt, rate, r030}) =>
            <CurrencyItem
              key={r030}
              cc={cc}
              txt={txt}
              rate={rate}
              r030={r030}
              clickHandler={removeFromFavourites}
              textButton='Remove from favourites'
            />
            ) :
            <div className="no-favourites">No favourite currencies. You can add it here</div>
          }
        </div>
      </div>
      <div className="main-list">
        <div className="list-header">All</div>
        {
          error ?
          <div className="info-label">Something Went Wrong :(</div> :
          isLoading ?
          <div className="info-label">Loading...</div> :
          localData.map(({cc, txt, rate, r030}) =>
            <CurrencyItem
              key={r030}
              cc={cc}
              txt={txt}
              rate={rate}
              r030={r030}
              clickHandler={addToFavourites}
              textButton='Add To Favourites'
            />
          )
        }
      </div>
    </div>
  )
}

export default CurrencyList