# Simple Iterator. simple_iterator.js
    This is the most inefficient way of performing an operation. This
    will iterate twice through all the effected DOM
    elements/nodes. First to find the element with a class of 'test'.
    Then to set the element's display to 'none'

# Simple Callback. simple_callback.js
    Better than the above. We pass a "callback" function to the
    function that will find all the effected elements. When each
    element is found we invoke the callback to set the node/elements
    display to none.

    Remember, javascript has first-class functions. Functions can be
    passed to functions. This is extremely powerful. You MUST
    understand this.

# Simple Anonymous Callback. anon_callback.js
    Same as above. But we can define an anonymous function, function
    with no name, as an argument to another function. In this case the
    anon function is a callback.

# This pointer in callbacks. callbacks.js

    The "this" pointer in callbacks *often* must be explicitly
    set. Typically in callbacks that handle keyboard events. In this
    case we learn to use the javascript call method to "attach" an
    object that will become the "this" pointer in the callback.

    This is a very important issue and it's critical you understand
    how the "call" method "binds" an object to a function's this
    pointer.

    You'll see more on this in the lab for javascript event handling.
