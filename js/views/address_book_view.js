addressBookApp.AddressBookView = Backbone.View.extend({
  el: '#book', // element already on the DOM when page loads
  events: {'submit form#add': 'createContact'},
  render: function(){
    console.log('render');
  },
  add: function(name, number){
    debugger;
  },
  createContact: function(event){
    event.preventDefault();
    console.log(event);
    var name = this.$('#name').val();
    var number = this.$('#number').val();
    this.add(name, number);
  }
});