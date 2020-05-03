const lodash = require('lodash');

const filter = require('./filter/filter');
const findMap = require('./find-map/find-map');
const objectFromKeys = require('./object-from-keys/object-from-keys');

var _ = Object.assign({}, lodash, {filter, findMap, objectFromKeys});

module.exports = _;
