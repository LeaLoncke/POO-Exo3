
let container = document.getElementById('productsContainer');

function Product(name, phrase, description) {
  // Create elements
  this.div =  document.createElement('div');
  this.name = document.createElement('h1');
  this.phrase = document.createElement('h2');
  this.description = document.createElement('p');
  // Add elements in the DOM
  container.appendChild(this.div);
  this.div.appendChild(this.name);
  this.div.appendChild(this.phrase);
  this.div.appendChild(this.description);
  // Add content in elements
  this.name.innerHTML = name;
  this.phrase.innerHTML = phrase;
  this.description.innerHTML = description;
}

let HTMLManager = {
  name: document.getElementById('name'),
  phrase: document.getElementById('phrase'),
  description: document.getElementById('description'),
  displayAndReset: function() {
    let newProduct = new Product(this.name.value, this.phrase.value, this.description.value);
    this.name.value = "";
    this.phrase.value = "";
    this.description.value = "";
  }
}


let submit = document.getElementById('submit');

submit.addEventListener("click", function() {
  HTMLManager.displayAndReset();
})




//
