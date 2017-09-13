// Nitty Gritty

/*
*/


/*
foo has 'closure' over bar, but we can't use it practically.
*/

function foo() {
	var a = 2;

	function bar() { // bar() is using a, so it isn't garbage collected.
		console.log( a ); // 2
	}

	bar();
}

foo(); // --> 2


/*
functions can be passed as values
*/

function foo() {
	var a = 2;

	function baz() {
		console.log( a ); // 2
	}

	bar( baz );
}

function bar(fn) {
	fn(); // look ma, I saw closure!
}

bar(foo); // --> 2


/*
indirect passing. why are we using globals like this?
*/

var fn;

function foo() {
	var a = 2;

	function baz() {
		console.log( a );
	}

	fn = baz; // assign `baz` to global variable
}

function bar() {
	fn(); // look ma, I saw closure!
}

foo();

bar(); // 2


/*
Practical case: setTimeout inside of a wait function
*/

function wait(message) {
  
    setTimeout( function timer(){
      console.log( message );
    }, 1000 );
  
  }
  
  wait( "Hello, closure!" ); // --> after 1 sec, we get console printout.


/*
(Some) joking aside, essentially whenever and wherever you treat functions (which access their own respective lexical scopes) as first-class values and pass them around, you are likely to see those functions exercising closure. Be that timers, event handlers, Ajax requests, cross-window messaging, web workers, or any of the other asynchronous (or synchronous!) tasks, when you pass in a callback function, get ready to sling some closure around!
*/


/*
Unexpected results: setTimeout in a for loop
*/

for (var i=1; i<=5; i++) {
	setTimeout( function timer(){
		console.log( i );
	}, i*1000 );
} // --> 6 (wait) 6 (wait) 6 (wait) 6 (wait) ...
// we'll get the same issue if we wrap the body of the loop in an IIFE

// this will solve the problem (and a variation with function(j))
// reason it works: we now have a separate scope for the loop body.
for (var i=1; i<=5; i++) {
	(function(){
		var j = i;
		setTimeout( function timer(){
			console.log( j );
		}, j*1000 );
	})();
}


// question - why do these print 5 first? 
// (answer - dev tools console says what i is before running the loop)
for (var i=1; i<=5; i++) {
	let j = i; // yay, block-scope for closure!
	setTimeout( function timer(){
		console.log( j );
	}, j*1000 );
}

for (let i=1; i<=5; i++) {
	setTimeout( function timer(){
		console.log( i );
	}, i*1000 );
}



/*
*/
