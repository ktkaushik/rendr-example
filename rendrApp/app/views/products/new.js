
/**
 *
 */

var _ = require('underscore')
  , BaseView = require('../base')
  , Product = require('../../models/product');

module.exports = BaseView.extend({
  className: 'products_new_view',

  events: {
    'click button.save-prospect': 'saveProduct'
  },

  postInitialize: function() {
    _.bindAll(this, 'saveProduct');
    this.model = new Product({}, { app: this.app });
  },

  saveProduct: function() {
    alert('Save product');
    // this.model.once('sync', this);
    console.log('logging model.............');
    this.model.name = 'ajskds';
    this.model.price = 10;
    console.log(this.model);
    this.model.save();
  }

});

module.exports.id = 'products/new';