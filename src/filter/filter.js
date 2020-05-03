const _ = require('lodash');

module.exports = function filter(collection, predicate) {
  return _.filter(collection, predicate || (value => !!value));
}
