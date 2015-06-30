addressBookApp.ContactView = Backbone.View.extend({
  tagName: 'div',
  initialize: function(){
    debugger;
    this.contactTemplate = _.template($('#tpl_contact').html());
  },
  render: function(){

  }
})