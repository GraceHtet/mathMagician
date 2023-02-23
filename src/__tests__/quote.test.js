import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Quote from '../components/Quote';

describe('Quote', () => {
  test('Quote Text match SnapShot', () => {
    render(<Quote />);
    expect(
      screen.getByText(
        /Mathematics is not about numbers, equations, computations, or alogrithms: It is about understanding -William Paul Thurston/i,
      ),
    ).toMatchSnapshot();
  });
});
