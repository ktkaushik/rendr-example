
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
    console.log("in postInitialize of view class for new...");
    _.bindAll(this, 'saveProduct');
    this.model = new Product({}, { app: this.app });
    console.log(this.model.url);
  },

  saveProduct: function() {
    this.model.set({name: 'kaushik', price: 1000}); // temp setup
    console.log(this.model);
    this.model.once('sync',function (argument) {
      
    }).save();
  }

});

module.exports.id = 'products/new';