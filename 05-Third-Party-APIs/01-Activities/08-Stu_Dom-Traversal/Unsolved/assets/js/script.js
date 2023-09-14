// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
rootEl.children("ul").children().css('background','white');
// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
rootEl.children("ul").eq(0).children().eq(0).text('X');
rootEl.children("ul").eq(2).children().eq(0).text('O');
console.log(rootEl.children("ul").eq(3));