// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var searchChgInputs = function(longerItemToMatch,arrToSearch){
  for(var i = 0; i < arrToSearch.length; i++){
    if(longerItemToMatch.slice(0,arrToSearch[i].length) === arrToSearch[i]){
      return true;
    }
  }return false;
}
var creditCards = [
    {name: "Diner's Club",    prefix: ['38','39'],                  cLength: [14]},
    {name: "American Express",prefix: ['34','37'],                  cLength: [15]},
    {name: "Switch",          prefix: ['4903','4905','4911','4936','564182',
                                       '633110','6333','6759'],     cLength: [16,18,19]},
    {name: "Visa",            prefix: ['4'],                        cLength: [13,16,19]},
    {name: "MasterCard",      prefix: ['51','52','53','54','55'],   cLength: [16]},
    {name: "Discover",        prefix: ['6011','644','645','646',
                                       '647','648','649','65'],     cLength: [16,19]},
    {name: "Maestro",         prefix: ['5018','5020','5038','6304'],cLength: [12,13,14,15,16,17,18,19]},
    {name: "China UnionPay",  prefix: ['624','625','626','6282','6283','6288',
                                       '6284','6285','6286','6287'],cLength: [16,17,18,19]}

      ];
for(var i = 622126; i <= 622925; i++){
  creditCards[7].prefix.push(i.toString());
}

creditCards[6].prefix.push()
// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var crdLen = cardNumber.length;
  for(var i = 0; i < creditCards.length; i++){
    var prefixArr = creditCards[i].prefix;
    var cardLengthArr = creditCards[i].cLength;
    var firstNums = cardNumber.slice(0,(prefixArr[0].length+3));
    if( searchChgInputs(firstNums, prefixArr) && cardLengthArr.includes(crdLen)){
        return creditCards[i].name;
    }
  }return "Unknown Card";
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
