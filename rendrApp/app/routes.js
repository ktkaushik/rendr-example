module.exports = function(match) {

  match('', 'home#index');

  match('/products', 'products#index');
  match('/products/:id', 'products#show');

  match('/new', 'products#new');
  match('/create', 'products#create');

  match('/users/:user', 'users#show');

};
