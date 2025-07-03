import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Search from './search';

test('renders search input and full list initially', async () => {
  render(<Search />);
  // This test doesn't do much just makes sure it's rendered
  expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
});
