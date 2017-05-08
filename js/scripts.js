//business logic
function Contact(first, last, age, number) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.number = number;

}

Contact.prototype.fullName = function () {
  return this.firstName+ " " + this.lastName;

};

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAge = $ ("input#new-age").val();
    var inputtedNumber = $ ("input#new-number").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedAge, inputtedNumber);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");


    $(".contact").last().click(function() {
  $("#show-contact").show();
  $("#show-contact h2").text(newContact.firstName);
  $(".first-name").text(newContact.firstName);
  $(".last-name").text(newContact.lastName);
  $(".age").text(newContact.age);
  $(".number").text(newContact.number);
});

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-age").val("");
    $("input#new-number").val("");
  });
});
