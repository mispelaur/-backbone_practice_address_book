// var contact1 = new addressBookApp.Contact({name: "Lauren", number: "07858000000"});
// var contact2 = new addressBookApp.Contact({name: "Meredith", number: "07858000001"});
// var contact3 = new addressBookApp.Contact({name: "Scott", number: "07858000002"});
// var contact4 = new addressBookApp.Contact({name: "Janet", number: "07858000003"});

// addressBookApp.addressBook = new addressBookApp.AddressBook([contact1, contact2, contact3, contact4]);

addressBookApp.addressBook = new addressBookApp.AddressBook([]);

$(document).ready(function(){
  var router = new addressBookApp.AppRouter();
  Backbone.history.start();
});

