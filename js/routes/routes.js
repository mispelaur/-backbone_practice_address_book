addressBookApp.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function(){
    console.log('index');
  }
})