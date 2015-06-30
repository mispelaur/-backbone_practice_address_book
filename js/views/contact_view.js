addressBookApp.ContactView = Backbone.View.extend({
  tagName: 'div',
  events: {
    'click button.remove': 'removeContact',
    'click button.edit': 'editContact'
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
  }, 
  editContact: function(){
    this.$('h1, p').each(function(){
      $(this).replaceWith($('<input class="'+ $(this).attr('class') + '"value="'+$(this).text() + '"/>'));
    })
  }
})