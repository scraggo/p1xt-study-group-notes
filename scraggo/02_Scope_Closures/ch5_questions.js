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