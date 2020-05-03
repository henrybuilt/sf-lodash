import findMap from './find-map';

describe('_.findMap()', () => {
  const c1 = [{id: 1, c: 1}, {id: 2, c: 1}, {id: 3, c: 1}];
  const c2 = [{id: 1, c: 2}, {id: 3, c: 2}];
  const c3 = [{i: 1, c: 3}, {i: '2', c: 3}, {i: 3, c: 3}];

  it('should filter out unfound matches', () => {
    expect(findMap(c1, c2, () => false).length).to.equal(0);
  });

  it('should find with a predicate function', () => {
    expect(findMap(c1, c2, (item1, item2) => item1.id === item2.id)).to.deep.equal([{id: 1, c: 2}, {id: 3, c: 2}]);
  });

  it('should find with a predicate string', () => {
    expect(findMap(c1, c2, 'id')).to.deep.equal([{id: 1, c: 2}, {id: 3, c: 2}]);
  });

  it('should find with a predicate array (id => i), and filter out type inequalities (i: "2")', () => {
    expect(findMap(c1, c3, ['id', 'i'])).to.deep.equal([{i: 1, c: 3}, {i: 3, c: 3}]);
  });
});
