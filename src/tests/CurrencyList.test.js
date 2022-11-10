import { render } from '@testing-library/react';
import CurrencyItem from '../components/CurrencyItem/CurrencyItem'

test('renders learn react link', () => {
  render(<CurrencyItem />)

  const currencyItem = <CurrencyItem />
  expect(currencyItem).toBeInTheDocument()
});