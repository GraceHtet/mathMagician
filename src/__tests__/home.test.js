import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('Home', () => {
  test('Home Page Title match SnapShot', () => {
    render(<Home />);
    expect(screen.getByText(/Welcome to our page/i)).toMatchSnapshot();
  });

  test('Home Text match SnapShot', () => {
    render(<Home />);
    expect(screen.getByText(/A calculation is/i)).toMatchSnapshot();
  });
});
