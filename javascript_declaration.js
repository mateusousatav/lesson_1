//declare width and height of a rectangle, print the area to the console
let width = 5;
let height = 10;
console.log("The area of the rectangle is: " + (width * height));

//explain the difference between var, let, and const in a comment
    //var is function-scoped and can be redeclared and updated
    //let is block-scoped and can be updated but not redeclared
    //const is block-scoped and cannot be updated or redeclared

//----------------------------------------------------------------------
//var
var x = 10;

function testVar() {
    var x = 20; // function-scoped
    return x; // prints 20
}

console.log(testVar()); // prints 20
console.log(x); // prints 10

//-------------------------------------------------------------------
//let

let y = 10;

function testLet() {
    let y = 20; // block-scoped
    return y; // prints 20
}

console.log(testLet()); // prints 20
console.log(y); // prints 10