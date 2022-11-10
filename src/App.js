import Header from './components/Header/Header'
import CurrencyList from './components/CurrencyList/CurrencyList'
import CurrencyExchange from './components/CurrencyExchange/CurrencyExchange'
import { useState } from 'react'
import './App.css'

function App() {

  const [currentPage, setCurrentPage] = useState('exchange')

  return (
    <div className='app'>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {
        currentPage === 'list' ?
        <CurrencyList /> :
        <CurrencyExchange />
      }
    </div>
  );
}

export default App
