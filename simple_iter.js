var findNodes = function () {
    var nodes = [], // stores the result
	found; // the next node found
    // get all the DOM elements
    var testElements = document.getElementsByClassName("test");

    for(var i = 0; i < testElements.length; i++){
	nodes.push(testElements[i]);
    };
    return nodes;
};

var hide = function (nodes) {
    var i = 0, max = nodes.length;
    for (; i < max; i += 1) {
	nodes[i].style.display = "none";
    };
};

// executing the functions hide(findNodes());
hide(findNodes());
