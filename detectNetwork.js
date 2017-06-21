// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var searchInArr = function(itemToMatch, arrToSearch){
    for(var i = 0; i < arrToSearch.length; i++){
      if(itemToMatch === arrToSearch[i]){
        return true;
      }
    }return false;
};

var creditCards = [
        {name: "Diner's Club",    prefix: ['38','39'],               cLength: [14]},
        {name: "American Express",prefix: ['34','37'],               cLength: [15]},
        {name: "Visa",            prefix: ['4'],                     cLength: [13,16,19]},
        {name: "MasterCard",      prefix: ['51','52','53','54','55'],cLength: [16]}
        //,{name: "Discover",        prefix: [],                        length: []}
      ];


var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var crdLen = cardNumber.length;
  for(var i = 0; i < creditCards.length; i++){
    var prefixArr = creditCards[i].prefix;
    var cardLengthArr = creditCards[i].cLength;
    var firstNums = cardNumber.slice(0,(prefixArr[0].length));
    if(searchInArr(firstNums,prefixArr) && searchInArr(crdLen,cardLengthArr)){
        return creditCards[i].name;
    }
  }return "Unknown Card";
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
