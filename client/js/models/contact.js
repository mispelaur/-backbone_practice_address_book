// if it exists assign it to itself, otherwise assign it to an empty object
var addressBookApp = addressBookApp || {};

addressBookApp.Contact = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/contacts', // connecting to rails-api backend
  defaults: {
    name: '',
    number: ''
  }
});