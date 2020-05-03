import lodash from 'lodash';

import filter from './filter/filter';
import findMap from './find-map/find-map';
import objectFromKeys from './object-from-keys/object-from-keys';

//WARNING for some reason mocha + babel doesn't like spread syntax
var _ = Object.assign({}, lodash, {filter, findMap, objectFromKeys});

export default _;
