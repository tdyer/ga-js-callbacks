var findNodes = function (callback) {
    var nodes = [], // stores the result
	found; // the next node found
    // get all the DOM elements
    var testElements = document.getElementsByClassName("test");
    for(var i = 0; i < testElements.length; i++){
	callback(testElements[i]);
    };
    return nodes;
};
var hide = function (node) {
    node.style.display = "none";
};

findNodes(hide);
