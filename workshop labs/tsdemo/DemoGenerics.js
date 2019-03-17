function canBeAnything(firstArg, secondArg) {
    console.log("its " + firstArg + " and " + secondArg);
    return firstArg;
}
var result1 = canBeAnything('cat', 3);
var result2 = canBeAnything(false, 3); // inference
function useArrays(firstArray) {
    for (var i = 0; i < firstArray.length; i++) {
        console.log(i + " : " + firstArray[i]);
    }
}
var numArray = [3, 5, 7];
useArrays(numArray);
var stringArray = ['cat', 'dog', 'mouse'];
useArrays(stringArray);
// Generic classes
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    return GenericClass;
}());
var myGenericNumber = new GenericClass();
myGenericNumber.someValue = 10;
myGenericNumber.add = function (x, y) {
    return this.someValue + x + y;
};
console.log(myGenericNumber.add(4, 5));
var myGenericString = new GenericClass();
myGenericString.someValue = 'cat';
myGenericString.add = function (x, y) {
    return this.someValue + " likes " + x + " and " + y;
};
console.log(myGenericString.add('tuna', 'salmon'));
function printName(theInput) {
    console.log("My name is " + theInput.name);
}
var serena = {
    name: 'Serena Williams',
    profession: 'Tennis Player'
};
var thor = {
    name: 'Thor',
    age: 3000,
    relation: 'Lightning God'
};
var wontWork = {
    isItWorking: false,
};
printName(serena);
printName(thor);
// incorrect type for the type variable
//printName(wontWork);
