import { render, screen } from '@testing-library/react';
import App from './App';

test('App should render header', async () => {
  render(<App />);

  const pageTitle = screen.getByRole('heading', { name: /Home/i });
  expect(pageTitle).toBeInTheDocument();
});
