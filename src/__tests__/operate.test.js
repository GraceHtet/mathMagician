import operate from '../logic/operate';

it('sum two numbers', () => {
  expect(operate(2, 4, '+')).toBe('6');
});

it('subtract two numbers', () => {
  expect(operate(3, 4, '-')).toBe('-1');
});

it('divide two numbers', () => {
  expect(operate(3, 4, '÷')).toBe('0.75000');
});

it('subtract two numbers', () => {
  expect(operate(3, 4, 'x')).toBe('12');
});

it('modulo two numbers', () => {
  expect(operate(3, 4, '%')).toBe('3');
});

it('cannot divide by zero', () => {
  expect(operate(3, 0, '÷')).toBe("Can't divide by 0.");
});

it('cannot find modulo', () => {
  expect(operate(3, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
});

it('throw error for unknown operations', () => {
  expect(() => {
    operate(2, 3, '/');
  }).toThrow();
});
