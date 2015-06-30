addressBookApp.ContactView = Backbone.View.extend({
  tagName: 'div',
  events: {
    'click button.remove': 'removeContact'
  },
  initialize: function(){
    this.contactTemplate = _.template($('#tpl_contact').html());
  },
  render: function(){
    var contact = this.contactTemplate(this.model.toJSON());
    this.$el.html(contact);
    return this;
  },
  removeContact: function(){
    this.model.destroy();
  }
})