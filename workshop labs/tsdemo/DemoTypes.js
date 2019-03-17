// boolean type
var isDone = false;
// number type
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// string type
var color = "blue";
// automatic type inference
var thing = 'pencil';
// can no longer assign any other type
//thing = 45;
// any type
var notSure = 4;
notSure = "maybe a string instead";
console.log('My type is ' + typeof notSure);
notSure = false;
console.log('My type is ' + typeof notSure);
// void
var dontuseme = undefined;
dontuseme = null;
// cannot assign any other values
//dontuseme = 'donkey';
function warnUser() {
    console.log("This is my warning message");
}
var uvar = undefined;
var nvar = null;
// cannot assign any other values
//nvar = 15;
//uvar = 'asdf';
// template strings
var fullName = "Superman";
var speed = 100;
var sentence = "My name is " + fullName + ".\n\nI run at " + speed * 2 + " miles per hour.";
console.log(sentence);
// normal array declaration
var ages = [30, 40, 50];
// generic array declaration
var ages2 = [30, 40, 50];
// using any for array of mixed types
var mylist = [1, true, "free"];
mylist[1] = 'cool';
mylist[2] = 35;
