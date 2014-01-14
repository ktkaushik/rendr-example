# Welcome to Rendr

Rendr is a small library from [Airbnb](https://www.airbnb.com) that allows you to run your [Backbone.js](http://backbonejs.org/) apps seamlessly on both the client and the server. Allow your web server to serve fully-formed HTML pages to any deep link of your app, while preserving the snappy feel of a traditional Backbone.js client-side MVC app.


# Getting Started

1. At the command prompt, create a new Rendr application

        rendr new myapp

2. Change directory to `myapp`

        cd myapp

3. Install the required npm modules

        npm install

4. Start the server

        grunt server

# Wh-questions

I used [Rendr CLI](https://github.com/technicolorenvy/rendr-cli) which sort of makes life easy.

I have a rails server setup which use REST api for Product.

Here are the [routes for the server](https://gist.github.com/ktkaushik/3cd9f4162d94fa074639)

##What's happening basically ?

### 1. Products Index

You should visit the routes.js file inside the app folder. I have mentioned the routes for **/products** which should call which action of which controller.

Thanks to Rendr, we have controllers here. you will see there is a [products_controller.js](https://github.com/ktkaushik/rendr-example/blob/master/rendrApp/app/controllers/products_controller.js) file inside /app.

There are actions mentioned in there. Index, Show, New.

I am using fetch() to access the API here.

**But how is that happening ?**

In [Index.js file](https://github.com/ktkaushik/rendr-example/blob/master/rendrApp/index.js#L19), I've added DataAdapterConfig which has basic configurations for my rails API set.

Now, since Product#Index would have no of products coming from the server, this is ideally a collection. So have a look at [Products Collection](https://github.com/ktkaushik/rendr-example/blob/master/rendrApp/app/collections/products.js)

You should see that the model is Product and the url is /products.

Simple as that. The field is set, kick-off time.

Again, in [products controller](https://github.com/ktkaushik/rendr-example/blob/master/rendrApp/app/controllers/products_controller.js#L14), the fetch method is taking Products collection, exactly why we have collection details. Params are basically params. Once request is made, we simply initiate the Callback.

This leads us to Views.

I've set up a Products folder and every action has its own view class which is extended to BaseView of Rendr.

Here i am just [setting up the className](https://github.com/ktkaushik/rendr-example/blob/master/rendrApp/app/views/products/index.js) that the template has to be rendered into.

In the template for [index template](https://github.com/ktkaushik/rendr-example/blob/master/rendrApp/app/templates/products/index.hbs), i am just looping through the collection.

### 2. Products Show

Now, the basic architecture is the same.

```
1. Add route
2. Add url to the model
3. Add action to the controller (write a fetch method if making a call to the API)
4. Add View class for the specfic action
5. Add template
```

The difference in the show action under the Products collection is that this is not related to collection. We are fetching A PRODUCT and not a list, thus the model URL.

___Its uncanny to use .json in the model urls, but thats a cleanup for another day.___

Basically, i think this should get you up started pretty nicely.

If you are not really familiar with Backbonejs, I highly recommend going through the [CodeSchool videos for Backbone.js](https://www.codeschool.com/courses/anatomy-of-backbonejs). It helped me once upon a time.


More to come.