/*
SYNTAX NOTES
var before every variable
; after every line
dictionaries are called objects
  how the eff do you loop through them?
while (condition) {}
instead of print, it's console.log

JavaScript toFixed() Method
Convert a number into a string, keeping only two decimals:
var num = 5.56789;
var n = num.toFixed(2);

What the eff JSLint? chill out.
"use strict";
*/

var TAXRATE = 0.08;

function add_tax(num) {
    var total = num + num * TAXRATE;
    return total;
}

var account = 2000.00;
var phone = 99.99;
var accessory = 9.99;
var total = 0;
var num_items = {'phones': 0, 'accessories': 0};
var threshold = add_tax(phone + accessory);

while (add_tax(total) < (account - threshold)) {
    total += phone;
    num_items['phones'] += 1;
    total += accessory;
    num_items['accessories'] += 1;
}

console.log('You can buy ');
console.log(num_items);
console.log('for: $' + total.toFixed(2));