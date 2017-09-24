var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor((Math.random() * 100) + 1)
 var newItem = {
   [item]: price
 }
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var statement = [];
  if(cart.length <= 0){
    console.log("Your shopping cart is empty.")
  }
  else{
    var newStatement
    for(var i = 0; i < cart.length; i++){
      var keys = Object.keys(cart[i])
      var itemList = keys + " at $" + cart[i][keys]
      statement.push(itemList)
      if(cart.length === 1){
        newStatement = "In your cart, you have " + statement[0] + "."
      }
      else if(cart.length === 2){
        newStatement = "In your cart, you have " + statement[0] + " and " + statement.slice(-1) + "."
      }
      else if (cart.length >= 3) {
        newStatement = "In your cart, you have " + statement.slice(0,-1).join(", ") + ", and " + statement.slice(-1) + "."
      }
    }
    console.log(newStatement);
  }
}

function total() {
  // write your code here
  var total = 0
  for(var i = 0; i < cart.length; i++){
    var keys = Object.keys(cart[i])
    var values = cart[i][keys]
    total += values
  }
  return total
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    var keys = Object.keys(cart[i])
    if(cart.hasOwnProperty(item)){
      cart.splice(cart[i],1);
      return cart
    }
    else{
      return "That item is not in your cart."
    }
  }
}


function placeOrder(cardNumber) {
  // write your code here
}
