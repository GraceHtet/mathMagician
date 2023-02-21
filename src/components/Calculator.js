import { useState } from 'react';

import '../index.css';
import './styles/calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [val, setVal] = useState({ total: null, next: null, operation: null });
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

  return (
    <>
      <h2>Let&apos;s do some Math</h2>
      <div className="cal-container">
        <div className="buttons">
          {numSigns.map((num) => (
            <button
              type="button"
              className="btn"
              key={num}
              onClick={() => setVal(calculate(val, num))}
            >
              {num}
            </button>
          ))}
        </div>
        <div className="display">
          <p>
            {val.total}
            {val.operation}
            {val.next}
          </p>
        </div>
      </div>
    </>
  );
};

export default Calculator;
