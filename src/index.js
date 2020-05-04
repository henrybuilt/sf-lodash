import lodash from 'lodash';

import findMap from './find-map/find-map';
import objectFromKeys from './object-from-keys/object-from-keys';

//WARNING for some reason mocha + babel doesn't like spread syntax
var _ = Object.assign({}, lodash, {findMap, objectFromKeys});

export default _;
