addressBookApp.ContactView = Backbone.View.extend({
  tagName: 'div',
  events: {
    'click button.remove': 'removeContact',
    'click button.edit': 'editContact',
    'click button.save': 'saveContact',
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
      $(this).replaceWith($('<'+this.tagName+'><input class="'+ $(this).attr('class') + '"value="'+$(this).text() + '"/></'+this.tagName+'>'));
    });
    this.$('button.edit').text('Save').addClass('save').removeClass('edit');
  },
  saveContact: function(){
    var name = this.$('input.name').val();
    var number = this.$('input.number').val();
    this.model.set({name: name, number: number}); //saves locally
    if(this.model.hasChanged()){
      this.model.save();
    }else{
      this.render();
    }
  }, 
})