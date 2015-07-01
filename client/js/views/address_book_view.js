addressBookApp.AddressBookView = Backbone.View.extend({
  el: '#book', // element already on the DOM when page loads
  events: {'submit form#add': 'createContact'},
  initialize: function(){
    this.collection.bind('add remove change', this.render, this);
  },
  render: function(){
    var contactList = $('#contactList');
    contactList.empty();
    this.collection.each(function(contact){
      var contactView = new addressBookApp.ContactView({model: contact});
      contactList.append(contactView.render().el);
    })
  },
  addContact: function(name, number){
    var contact = new addressBookApp.Contact({name: name, number: number});
    this.collection.add(contact);
  },
  createContact: function(event){
    event.preventDefault();
    console.log(event);
    debugger;
    var name = this.$('#name');
    var number = this.$('#number');
    this.addContact(name.val(), number.val());
    name.val('');
    number.val('');
  }
});