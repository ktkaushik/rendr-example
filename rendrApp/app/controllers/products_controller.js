
/**
 *
 */

var _ = require('underscore');

module.exports = {

  index: function(params, callback) {

    console.log('************ in the index action of products ***************************');

    this.app.fetch({
      collection: {
        collection: 'Products',
        params: params
      }
    }, callback);

  },

  show: function(params, callback) {

    console.log('.......... in the show action...............');
    console.log(params);

    this.app.fetch({

      model: {
        model: 'Product',
        params: params
      }
    }, callback);

  },

  new: function(params, callback) {

    console.log('.......... in the new action...............');
    callback();

  }

};