var Base = require('./base');

module.exports = Base.extend({
  urlRoot: '/:user' + '.json'
});

module.exports.id = 'User';