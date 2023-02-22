import calculate from '../logic/calculate';

let obj;

beforeEach(() => {
  obj = {
    total: null,
    next: null,
    operation: null,
  };
});

describe('number as buttonName', () => {
  it('0 calls', () => {
    obj = calculate(obj, '0');
    expect(obj).toHaveProperty('next', '0');

    obj = calculate(obj, '0');
    expect(obj).not.toHaveProperty('next');

    obj = calculate(obj, '0');
    expect(obj).toHaveProperty('next', '0');
  });

  it('same num calls', () => {
    obj = calculate(obj, '1');

    expect(obj).toHaveProperty('next', '1');

    obj = calculate(obj, '2');
    expect(obj).toHaveProperty('next', '12');
  });

  it('AC, op, num, num calls => same as without op', () => {
    obj = calculate(obj, '+');
    expect(obj).toHaveProperty('operation', '+');

    obj = calculate(obj, '2');
    obj = calculate(obj, '3');
    expect(obj).toHaveProperty('next', '23');
  });
});

describe('"." as a buttonName', () => {
  it("no prevBtn or AC => current num is '0.'", () => {
    expect(obj).toHaveProperty('next', null);
    obj = calculate(obj, '.');
    expect(obj).toHaveProperty('next', '0.');
  });

  it("prevBtn is num, add '.' if current num doesn't have '.'", () => {
    obj = calculate(obj, '2');
    obj = calculate(obj, '.');
    expect(obj).toHaveProperty('next', '2.');
  });

  it("prevBtn is num, ignore '.' if current num has '.'", () => {
    obj = calculate(obj, '2');
    obj = calculate(obj, '.');
    expect(obj).toHaveProperty('next', '2.');
    obj = calculate(obj, '.');
    expect(obj).toHaveProperty('next', '2.');
  });

  it("no current num, prevBtn is op => current num is '0.'", () => {
    obj = calculate(obj, '2');
    obj = calculate(obj, '.');
    obj = calculate(obj, '3');
    obj = calculate(obj, '+');
    expect(obj).toHaveProperty('next', null);
    obj = calculate(obj, '.');
    expect(obj).toHaveProperty('next', '0.');
  });

  it("prevBtn isn't num or op, add '.' if total doesn't has '.'", () => {
    obj = calculate(obj, '2');
    obj = calculate(obj, '+');
    obj = calculate(obj, '3');
    obj = calculate(obj, '=');
    obj = calculate(obj, '.');

    expect(obj).toHaveProperty('total', '5');
    expect(obj).toHaveProperty('next', '5.');
  });

  it("prevBtn isn't num or op, empty obj if total has '.'", () => {
    obj = calculate(obj, '2');
    obj = calculate(obj, '+');
    obj = calculate(obj, '3');
    obj = calculate(obj, '.');
    obj = calculate(obj, '3');
    obj = calculate(obj, '=');
    obj = calculate(obj, '.');

    expect(obj).not.toHaveProperty('total');
    expect(obj).not.toHaveProperty('operation');
    expect(obj).not.toHaveProperty('next');
  });
});

describe("'=' as buttonName", () => {
  it("num, op, num, '=' consecutively", () => {
    obj = calculate(obj, '2');
    obj = calculate(obj, '+');
    obj = calculate(obj, '3');
    obj = calculate(obj, '=');
    expect(obj).toHaveProperty('next', null);
    expect(obj).toHaveProperty('total', '5');
  });
  it("num, num, '=' consecutively(no op)", () => {
    obj = calculate(obj, '2');
    obj = calculate(obj, '3');
    obj = calculate(obj, '=');
    expect(obj).toHaveProperty('next', '23');
    expect(obj).not.toHaveProperty('total');
  });
});

describe("'+/-' as buttonName", () => {
  it("num, '+/-' consecutively", () => {
    obj = calculate(obj, '2');
    obj = calculate(obj, '+/-');
    expect(obj).toHaveProperty('next', '-2');
  });
  it("num, '+/-' consecutively", () => {
    obj = calculate(obj, '2');
    obj = calculate(obj, '+');
    obj = calculate(obj, '3');
    obj = calculate(obj, '=');
    obj = calculate(obj, '+/-');
    expect(obj).toHaveProperty('total', '-5');
  });
  it("'+/-' empty obj", () => {
    obj = calculate(obj, '+/-');

    expect(obj).not.toHaveProperty('total');
    expect(obj).not.toHaveProperty('operation');
    expect(obj).not.toHaveProperty('next');
  });
});

it("null properties with 'AC'", () => {
  calculate(obj, 'AC');

  expect(obj).toHaveProperty('total', null);
  expect(obj).toHaveProperty('operation', null);
  expect(obj).toHaveProperty('next', null);
});
