import arrayMove from './array-move';

describe('_.arrayMove()', () => {
  it('should reorder array', () => {
    expect(arrayMove([1, 3, 2], 2, 1)).to.deep.equal([1, 2, 3]);
  });

  it('shouldn\'t mutate array', () => {
    var array = [1, 3, 2];

    expect(arrayMove(array, 2, 1)).to.deep.equal([1, 2, 3]);

    expect(array).to.deep.equal([1, 3, 2]);
  });
});
