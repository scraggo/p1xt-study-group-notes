// book example: 'Functions as Scopes' section
var a = 2;

(function foo(){ // <-- insert this

	var a = 3;
	console.log( a ); // 3

})(); // <-- and this

console.log( a ); // 2

foo(); // error: foo is not defined

// FUNCTION EXPRESSION - variable = function.
// you can immediately invoke?
let bar = function() { // <-- this function is anonymous!!!
  console.log('hi');
}()

console.log(bar);
// hi
// undefined
// undefined

// what happened? the output of anon. function is 'undefined'. so, console prints 'hi' and then bar is undefined.

// FUNCTION DECLARATION
//why doesn't the function declaration version work? see () at end
/*
function baz() {
  console.log('baz');
}()
*/

