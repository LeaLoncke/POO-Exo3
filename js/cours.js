
function User(firstname, lastname) {
  this.firstName = firstname,
  this.lastName = lastname,
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  }
} // End of User()

var john = new User("John", "Doe");
var charbon = new User("Charbon", "le chat noir");
var patate = new User("Patate", "le chat tigré");

var htmlManager = {
  parentElement: document.getElementById('userList'),
  users: [john, charbon, patate],
  createHTMLElement: function(element, content, parentOfElement) {
    var childElement = document.createElement(element);
    childElement.innerHTML = content;
    parentOfElement.appendChild(childElement);
  },
  insertHTMLElements: function() {
    this.users.forEach( function(user) {
        htmlManager.createHTMLElement("li", user.fullName(), htmlManager.parentElement);
    })
  }
} // End of htmlManager()

htmlManager.insertHTMLElements();


// Content of displayUser(), if not "user =>" :
// // Method 1
// let that = this;
// array.forEach(function(user){
//   that.createHTMLElement('li', user.fullName(), that.parentElement);
// })
// // Method 2
// array.forEach(function(user){
//   htmlManager.createHTMLElement('li', user.fullName(), htmlManager.parentElement);
// })



//
