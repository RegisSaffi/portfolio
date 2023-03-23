import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders cent', () => {
  const { findAllByText } = render(<App />);
  const linkElement = findAllByText(/Regis/i);
  expect(linkElement).toBeInTheDocument();
});
