// @ts-nocheck
import { render, screen } from '@testing-library/react';
import AppRouter from './pages/AppRouter';

test('renders learn react link', () => {
  render(<AppRouter />);
  const linkElement = screen.getByText(/Accueil/i);
  expect(linkElement).toBeInTheDocument();
});
