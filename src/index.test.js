import _ from './index';

describe('_', () => {
  it('should include lodash functions', () => {
    expect(_.values({a: 1})).to.deep.equal([1]);
  });

  it('should include @symbolic functions', () => {
    expect(_.objectFromKeys(['a'], () => 1)).to.deep.equal({a: 1});
    expect(_.arrayMove([1, 2, 3], 2, 1)).to.deep.equal([1, 3, 2]);
  });
});
