import objectFromKeys from './object-from-keys';

describe('_.objectFromKeys()', () => {
  it('should create a new object out of keys including key and index', () => {
    expect(objectFromKeys(['a', 'b', 'c'], (key, index) => `${key}${index}`)).to.deep.equal({a: 'a0', b: `b1`, c: `c2`});
  });
});
