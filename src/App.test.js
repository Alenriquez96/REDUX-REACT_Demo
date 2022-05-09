import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Futura web - Exploding Cakes', () => {
  render(<App />);
  const linkElement = screen.getByText(/Futura web - Exploding Cakes/i);
  expect(linkElement).toBeInTheDocument();
  expect(screen).toMatchSnapshot()
});
