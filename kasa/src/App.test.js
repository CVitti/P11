// @ts-nocheck
import { render, screen } from '@testing-library/react';
import App from './pages/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Accueil/i);
  expect(linkElement).toBeInTheDocument();
});
