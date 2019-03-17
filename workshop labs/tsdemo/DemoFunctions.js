// Named function
function add(x, y) {
    return x + y;
}
//Writing full function type for anonymous function
var myAdd = function (x, y) { return x + y; };
// Simpler version with type inference 
var myAdd2 = function (x, y) { return x + y; };
console.log(myAdd2(3, 5));
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
// error, too few parameters
//let result1 = buildName("Bob");                
// error, too many parameters
//let result2 = buildName("Bob", "Adams", "Sr.");  
// correct number of parameters
var result3 = buildName("Bob", "Adams");
function concatName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
// optionally leave one parameter out
var result4 = concatName("Bob");
// correct number of parameters
var result5 = concatName("Bob", "Adams");
//default-initialized parameters
function createName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
// works correctly now, returns "Bob Smith"
var result7 = createName("Bob");
// still works, also returns "Bob Smith" 
var result8 = createName("Bob", undefined);
// Rest parameters
function makeName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = makeName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
