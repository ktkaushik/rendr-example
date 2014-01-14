var _ = require('underscore');

module.exports = {

  show: function(params, callback) {
    console.log('.......... in the show action...............');
    console.log(params);

    this.app.fetch({

      model: {
        model: 'User',
        params: params
      }
    }, callback);

  }

};