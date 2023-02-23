import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Calculator from '../components/Calculator';

const numSigns = [
  'AC',
  '+/-',
  '%',
  '÷',
  '7',
  '8',
  '9',
  'x',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];

describe('Calculator', () => {
  test('renders Display component', () => {
    render(<Calculator />);
    expect(screen.getByTestId('display')).toMatchSnapshot();
  });

  numSigns.forEach((numsign) => {
    test(`show ${numsign}`, () => {
      render(<Calculator />);
      expect(screen.getByText(numsign)).toMatchSnapshot();
    });
  });

  test('the reult of (1+3-10.569x7÷9%11=) should equal 5.10922 ', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('÷'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('%'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('='));
    fireEvent.click(screen.getByText('+/-'));
    expect(screen.getByTestId('display').textContent).toBe('5.10922');
  });

  test('the reult of (3.56 +/-) should equal -3.56 ', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('+/-'));
    expect(screen.getByTestId('display').textContent).toBe('-3.56');
  });
});
