// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var crdPrefix = cardNumber.slice(0,2);
  var length = cardNumber.length;
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var creditCards = [
          {name: "Diner's Club",    prefix: ['38','39'],               length: [14]},
          {name: "American Express",prefix: ['34','37'],               length: [15]},
          {name: "Visa",            prefix: ['4'],                     length: [13,16,19]},
          {name: "MasterCard",      prefix: ['51','52','52','54','55'],length: [16]},
          {name: "Discover",        prefix: [],                        length: []}];
  for(var i = 0; i < creditCards.length; i++){
    var prefixArr = creditCards[i].prefix;
    var cardLength = creditCards[i].length;
    for(var j = 0; j < prefixArr; j++){
      if(cardNumber.split(0,prefixArr[j].length)=== prefixArr[j] && cardNumber.length === cardLength){
        return creditCards[i].name;
      }
    }

  }
  return "Unknown Card";
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
