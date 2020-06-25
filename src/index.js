import lodash from 'lodash';

import findMap from './find-map/find-map';
import median from './median/median';
import objectFromKeys from './object-from-keys/object-from-keys';
import labelForMoment from './label-for-moment/label-for-moment';

//WARNING for some reason mocha + babel doesn't like spread syntax
var _ = Object.assign({}, lodash, {findMap, median, objectFromKeys, labelForMoment});

export default _;
