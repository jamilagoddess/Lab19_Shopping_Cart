var shoppingCart = [];

/*connect buttons to this object*/
function addToCart (name, price, amount) {
	this.name = name;
	this.price = price;
	this.amount = amount;
	cart.push;
};

/*each new button creates a corresponding object below*/
shoppingCart.push (new Item("Lemon", 1.29, 1));
shoppingCart.push (new Item("Basil", 1.29, 1));
shoppingCart.push (new Item("Olive Oil", 1.29, 1));
shoppingCart.push (new Item("Garlic", 1.29, 1));
shoppingCart.push (new Item("Penne", 1.29, 1));
shoppingCart.push (new Item("Sun-Dried Tomatoes", 1.29, 1));

/*define the functions to add each element to cart (append to the list)*/
function addLemon() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Lemon");
    node.appendChild(textnode);
    document.getElementById("shoppingCart").appendChild(node);
}
function addBasil() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Basil");
    node.appendChild(textnode);
    document.getElementById("shoppingCart").appendChild(node);
}
function addOliveOil() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Olive Oil");
    node.appendChild(textnode);
    document.getElementById("shoppingCart").appendChild(node);
}
function addGarlic() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Garlic");
    node.appendChild(textnode);
    document.getElementById("shoppingCart").appendChild(node);
}
function addPenne() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Penne");
    node.appendChild(textnode);
    document.getElementById("shoppingCart").appendChild(node);
}
function addTomatoes() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Sun-Dried Tomatoes");
    node.appendChild(textnode);
    document.getElementById("shoppingCart").appendChild(node);
}

/*if there is more than one item in the cart with the same name, increase the count by one*/
for (var i in cart) {
	if (cart[i].name === name) {
		cart[i].count ++;
		break;
	}
}

/*total all items in the shopping cart*/
function getTotal(shoppingCart) {
	var total;
	for (var i = 0; i < items.length; i++){
      total = total + (items[i].quantity*items[i].price);
		return total;
		console.log(shoppingCart.getTotal());
	}
}
