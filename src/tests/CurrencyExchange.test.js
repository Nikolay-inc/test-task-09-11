import { render, screen } from '@testing-library/react';
import CurrencyExchange from '../components/CurrencyExchange/CurrencyExchange'

test('Currency Exchange Test', () => {
  render(<CurrencyExchange />);
  const title = screen.getByText('Exchange Rate')
  expect(title).toBeInTheDocument()
});