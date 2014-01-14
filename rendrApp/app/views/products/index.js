var BaseView = require('../base');

console.log('in the index view of products...........');
module.exports = BaseView.extend({
  className: 'products_index_view'
});

module.exports.id = 'products/index';
