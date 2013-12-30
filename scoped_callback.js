var myapp = {};
myapp.color = "green";
myapp.paint = function (node) {
    node.style.color = this.color;
};

var findNodes = function (callback) {
    var nodes = [], // stores the result
	found; // the next node found
    // get all the DOM elements
    var testElements = document.getElementsByClassName("test");
    for(var i = 0; i < testElements.length; i++){
	// AAAAAAhhhhgggg, the callback's this pointer is wrong.
	// the this pointer is the global object because this
	// findNodes function is a global object.
	callback(testElements[i]);
    };
    return nodes;
};

var findNodes_fixed = function (callback,callback_obj) {
    var nodes = [], // stores the result
	found; // the next node found
    // get all the DOM elements
    var testElements = document.getElementsByClassName("test");
    for(var i = 0; i < testElements.length; i++){
	callback.call(callback_obj, testElements[i]);
    };
    return nodes;
};

// findNodes(myapp.paint);

findNodes_fixed(myapp.paint, myapp)
