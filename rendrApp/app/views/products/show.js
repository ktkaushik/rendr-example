
var BaseView = require('../base');

console.log('in the show view of products...........');
module.exports = BaseView.extend({
  className: 'products_index_view'
});

module.exports.id = 'products/show';
