import './Calculator.css';

const Calculator = () => {
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
};

export default Calculator;
