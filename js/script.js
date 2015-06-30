var contact1 = new addressBookApp.Contact({name: "Lauren Spencer", number: "07858123456"});
var contact2 = new addressBookApp.Contact({name: "Meredith Spencer", number: "07858123457"});
var contact3 = new addressBookApp.Contact({name: "Scott Spencer", number: "07858123458"});
var contact4 = new addressBookApp.Contact({name: "Janet Spencer", number: "07858123459"});

var addressBook = new addressBookApp.AddressBook([contact1, contact2, contact3, contact4]);


$(document).ready(function(){
  var addressBookView = new addressBookApp.AddressBookView({collection: addressBook});
  addressBookView.render();
});

