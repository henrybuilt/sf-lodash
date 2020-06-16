import _ from 'lodash';

export default function filterOutliers(array) {
  var values = array.concat();

  values.sort(function(a, b) {
    return a - b;
  });

  var q1 = values[Math.floor((values.length / 4))];
  var q3 = values[Math.ceil((values.length * (3 / 4)))];
  
  var iqr = q3 - q1;

  // Find min and max values
  var maxValue = q3 + iqr*1.5;
  var minValue = q1 - iqr*1.5;

  // Filter anything beyond or beneath these values.
  var filteredValues = values.filter(function(x) {
      return (x <= maxValue) && (x >= minValue);
  });

  return filteredValues;
}
