import _ from 'lodash';

export default function filter(collection, predicate) {
  return _.filter(collection, predicate || (value => !!value));
}
