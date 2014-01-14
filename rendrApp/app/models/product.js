var Base = require('./base');

module.exports = Base.extend({
  url: function() {
    if (this.isNew()) {
      console.log('..... new product............');
      return '/products';
    } else{
      console.log('..... showing a product............');
      return '/products' + '/:id' + '.json';
    };
    
  }
});

module.exports.id = 'Product';