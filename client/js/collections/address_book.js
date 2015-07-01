addressBookApp.AddressBook = Backbone.Collection.extend({
  url: 'http://localhost:3000/contacts', // connecting to rails-api backend
  model: addressBookApp.Contact
});