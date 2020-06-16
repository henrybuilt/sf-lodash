import median from './median';

describe('_.median()', () => {
  it('should return the median for a given array', () => {
    expect(median([1, 60, 60, 60, 90, 90, 1000])).to.equal(60);
  });
});
