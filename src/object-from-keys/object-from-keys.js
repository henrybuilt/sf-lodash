const _ = require('lodash');

module.exports = function objectFromKeys(keys, predicate) {
  var object = {};

  _.forEach(keys, (key, index) => object[key] = predicate(key, index));

  return object;
}
