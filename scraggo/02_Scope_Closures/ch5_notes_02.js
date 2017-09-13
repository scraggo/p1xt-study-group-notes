// Nitty Gritty

/*
MODULES
*/

// embedded functions (no closure here)
function foo() {
	var something = "cool";
	var another = [1, 2, 3];

	function doSomething() {
		console.log( something );
	}

	function doAnother() {
		console.log( another.join( " ! " ) );
	}
}

// module pattern - see the return section
function CoolModule() {
	var something = "cool";
	var another = [1, 2, 3];

	function doSomething() {
		console.log( something );
	}

	function doAnother() {
		console.log( another.join( " ! " ) );
	}

	return { // public API for our module.		
		doSomething: doSomething,
		doAnother: doAnother
	};
}
/* continued...
Firstly, CoolModule() is just a function, but it has to be invoked for there to be a module instance created. Without the execution of the outer function, the creation of the inner scope and the closures would not occur.
*/
var foo = CoolModule();
foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3

// this won't work: CoolModule().doSomething
// this won't work: CoolModule.doSomething

/* From the Modules section: I need to see an example!!!
Note: It is not required that we return an actual object (literal) from our module. We could just return back an inner function directly. jQuery is actually a good example of this. The jQuery and $ identifiers are the public API for the jQuery "module", but they are, themselves, just a function (which can itself have properties, since all functions are objects).
*/

// this doesn't seem to fulfill the module pattern (my code, not the author's)
function CoolModule() {
	var something = "cool";

	function doSomething() {
		console.log( something );
	}

	return doSomething();
}

/*
Variation on first module - having it immediately execute (only one module instance)
*/
var foo = (function CoolModule() {// --> we defined it in foo from the outset
	var something = "cool";
	var another = [1, 2, 3];

	function doSomething() {
		console.log( something );
	}

	function doAnother() {
		console.log( another.join( " ! " ) );
	}

	return {
		doSomething: doSomething,
		doAnother: doAnother
	};
})();// <-- this immediately executes

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3

// Now with a parameter:
function CoolModule(id) {
	function identify() {
		console.log( id );
	}

	return {
		identify: identify
	};
}

var foo1 = CoolModule( "foo 1" );
var foo2 = CoolModule( "foo 2" );

foo1.identify(); // "foo 1"
foo2.identify(); // "foo 2"


/*
Another slight but powerful variation on the module pattern is to name the object you are returning as your public API: (for use internally only? - I think the answer is No.)
Also, this is another IIFE and doesn't have to be (I think)
*/
var foo = (function CoolModule(id) {
	function change() {
		// modifying the public API
		publicAPI.identify = identify2;
	}

	function identify1() {
		console.log( id );
	}

	function identify2() {
		console.log( id.toUpperCase() );
	}

	var publicAPI = {
		change: change,
		identify: identify1
	};

	return publicAPI;
})( "foo module" );

foo.identify(); // foo module
foo.change();
foo.identify(); // FOO MODULE


/*
*/

/*
*/

/*
*/

/*
*/

/*
*/

/*
*/
