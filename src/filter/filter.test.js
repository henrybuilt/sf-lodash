import filter from './filter';

describe('_.filter()', () => {
  it('should filter out falsey values', () => {
    expect(filter([1, 0, true, false, undefined])).to.deep.equal([1, true]);
  });
});
