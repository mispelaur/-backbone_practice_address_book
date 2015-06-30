// if it exists assign it to itself, otherwise assign it to an empty object
var addressBookApp = addressBookApp || {};

addressBookApp.Contact = Backbone.Model.extend({
  defaults: {
    name: '',
    number: ''
  }
});