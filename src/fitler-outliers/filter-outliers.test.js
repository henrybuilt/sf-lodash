import filterOutliers from './filter-outliers';

describe('_.filterOutliers()', () => {
  it('should create a new array without outlier values', () => {
    var filteredValues = filterOutliers([1, 60, 60, 60, 90, 90, 1000, 199999]);

    expect(filteredValues).to.deep.equal([1, 60, 60, 60, 90, 90, 1000]);
  });
});
