import _ from 'lodash';

export default function findMap(collection1, collection2, predicate) {
  return _.filter(_.map(collection1, (item1, i1) => {
    return _.find(collection2, (item2, i2) => {
      var _predicate = predicate;

      if (typeof(predicate) === 'string') _predicate = (item1, item2) => _.get(item1, predicate) === _.get(item2, predicate);
      if (Array.isArray(predicate)) _predicate = (item1, item2) => _.get(item1, predicate[0]) === _.get(item2, predicate[1]);

      return _predicate && _predicate(item1, item2, i1, i2); //HINT avoid "cannot call function undefined"
    });
  }));
};
