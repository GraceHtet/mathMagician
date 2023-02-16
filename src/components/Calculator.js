import { useState } from 'react';
import './Calculator.css';
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
    <div className="cal-container">
      <div className="display">
        {val.total}
        {val.operation}
        {val.next}
      </div>
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
  );
};

export default Calculator;
