
/**
 *
 */

var Base = require('./base')
  , Product = require('../models/product');

module.exports = Base.extend({
  model: Product,
  url: '/products.json'
});

module.exports.id = 'Products';