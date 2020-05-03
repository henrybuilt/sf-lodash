const _ = require('./index');

describe('_', () => {
  it('should include lodash functions', () => {
    expect(_.values({a: 1})).to.deep.equal([1]);
  });

  it('should include @symbolic functions', () => {
    expect(_.filter([1, 0])).to.deep.equal([1]);
  });
});
