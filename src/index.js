import lodash from 'lodash';

import arrayMove from './find-map/find-map';
import findMap from './find-map/find-map';
import labelForMoment from './label-for-moment/label-for-moment';
import median from './median/median';
import objectFromKeys from './object-from-keys/object-from-keys';

//WARNING for some reason mocha + babel doesn't like spread syntax
var _ = Object.assign({}, lodash, {
  arrayMove,
  findMap,
  labelForMoment,
  median,
  objectFromKeys
});

export default _;
