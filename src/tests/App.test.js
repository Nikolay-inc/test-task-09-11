import { render } from '@testing-library/react'
import App from '../App'
import CurrencyList from '../components/CurrencyList/CurrencyList'
import CurrencyExchange from '../components/CurrencyExchange/CurrencyExchange'
import Header from '../components/Header/Header'

test('renders app with components', () => {
  render(<App />)
  const header = <Header />
  expect(header).toBeInTheDocument()

  const currencyList = <CurrencyList />
  expect(currencyList).toBeInTheDocument()

  const currencyExchange = <CurrencyExchange />
  expect(currencyExchange).toBeInTheDocument()
});
