import React from 'react';
import './Calculator.css';

const numSigns = [
  'AC',
  '+/-',
  '%',
  '/',
  7,
  8,
  9,
  '*',
  4,
  5,
  6,
  '-',
  1,
  2,
  3,
  '+',
  0,
  '.',
  '=',
];

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="cal-container">
        <div className="display">0</div>
        {numSigns.map((num) => (
          <button type="button" className="btn" key={num}>
            {num}
          </button>
        ))}
      </div>
    );
  }
}

export default Calculator;
