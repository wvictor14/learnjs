function Person(firstName, lastName) {

  var secret = 'tacosarelove';

  this.firstName = firstName;
  this.lastName = lastName;
  this.hasJob = false;

  this.fullName = function() {
    return this.firstName + ' ' + this.lastName;
  }

  this.setFirstName = function(firstName) {
    this.firstName = firstName;
  }

  this.setLastName = function(lastName) {
    this.lastName = lastName;
  }

  this.getSecret = function() {
    return secret;
  }
}