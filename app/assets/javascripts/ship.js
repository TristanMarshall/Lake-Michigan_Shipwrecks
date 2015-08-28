//ship-list id
//wrecks id


// name spacing
var app = app || {};
var active = active || {}; //instaniated objects live here


//blueprints
app.model = Backbone.Model.extend();

app.collection = Backbone.Collection.extend({
  //speficy model. Hey collection whenever you created a brand new model use this blueprint!
  url: '/api/ships', // specify url of API
  model: app.model

});
app.modelView = Backbone.View.extend({
  initialize: function(){
    //every model view should have a model
    //this.model in theory
    this.template =_.template($('#wrecks').html());
    this.render();
  },
  render: function(){
    var data = this.model.attributes;
    this.$el.append(this.template(data));
  }
});
//whenever this collection has finished talking to the server (performing any CRUD actions go ahead and.. render();
app.collectionView = Backbone.View.extend({
  initialize: function(){
    var that = this;
    this.collection.on('sync', function() {
      that.render();
    });
    //every collection view shoud have a model
    // retrieve data from my API 'all get' route
    this.collection.fetch();
    this.$el.html('');//empty out any content inside of my el
    this.render();
  },
  render: function() {
  //this function has the looping responsibilites
    var collection = this.collection.models;

    for (var model in collection) {
        //console.log(collection[model].attributes);
        new app.modelView({
          el: $('#ship-list'),
          model: collection[model]
        });
    }

  }
});

//end of blueprints

//once the page has finished loading...
$(document).ready(function(){

//instantiate collection + collectionView
active.collection = new app.collection();
active.collectionView = new app.collectionView({
  collection: active.collection,
  el: $('#ship-list')
  });
});

///////////////////////////////////////////////////////////////////
