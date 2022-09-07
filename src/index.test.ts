import noNew from './';

class A {
  constructor(readonly i: number, readonly s?: string) {}

  fun(n: number) {
    return `${this.i + n}: ${this.s}`;
  }
}

const AA = noNew(A);

describe('noNew', () => {
  describe('Without optional param', () => {
    const a = AA(10);
    it('should create class object', () => {
      expect(a.i).toBe(10);
      expect(a.s).toBeUndefined();
      expect(a.fun(2)).toBe('12: undefined');
    });
  });
  describe('With optional param', () => {
    const a = AA(10, 'hello');
    it('should create class object', () => {
      expect(a.i).toBe(10);
      expect(a.s).toBe('hello');
      expect(a.fun(2)).toBe('12: hello');
    });
  });
});
