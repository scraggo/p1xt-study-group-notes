// Chapter 2 notes - messing with repl.it

// SEARCH FOR ??

// USEFUL FUNCTIONS - SEE SEPARATE DOC / REPL.IT
//MAKE A PRINT FUNCTION!
function print(a) {
    console.log(a);
}

// REF
/*
http://stackoverflow.com/questions/2940424/valid-javascript-object-property-names
*/

// typeof
// var b = "hey there"
var a = {b:42};
console.log(typeof a);
console.log(typeof b); // undefined (weird...) ??
console.log(typeof a['b']); // correctly accesses value (number)
console.log(typeof a[b]);  // undefined
console.log(typeof a.b);  // correctly accesses value (number)
// console.log(typeof a.'b'); // SyntaxError

// var b = "hey there"
var a = {'b':42};
console.log(typeof a);
console.log(typeof 'b'); // string
console.log(typeof a['b']); // correctly accesses value (makes sense)
// console.log(typeof a[b]);  // ReferenceError
console.log(typeof a.b);  // correctly accesses value (no quotes needed...)
// console.log(typeof a.'b'); // SyntaxError

var obj = {
	a: "hello world",
	b: 42
};
var b = "a";
console.log(obj[b]);			// "hello world" - because var b wraps a in it (why isn't "a" considered a string ?? )
console.log(obj["b"]);		// 42 - because this is the normal way to access object values


var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";
console.log(a == c);		// true
console.log(b == c);		// true
console.log(a == b);		// false - why ??

//---

function foo() {
	console.log( this.bar ); // global (string - see below)
}

var bar = "global";

var obj1 = {
	bar: "obj1",
	foo: foo
};
var obj2 = {
	bar: "obj2"
};

// --------
foo();				// "global"
obj1.foo();			// "obj1" ('this' allows you to use foo() to print the 'bar' that's attached to obj1)
foo.call( obj2 );	// "obj2" ('call' seems to allow you to call the function in a different way?)
new foo();			// undefined
