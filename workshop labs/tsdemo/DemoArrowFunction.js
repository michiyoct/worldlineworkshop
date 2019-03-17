// Regular function declaration
function funcName(params) {
    return params + 2;
}
funcName(2);
// arrow function with a single parameter
var myFuncName1 = function (params) { return params + 2; };
myFuncName1(2);
// shorter form that implies return statement
var myFuncName2 = function (params) { return params + 2; };
// parenthesis optional with only one single parameter
var myFuncName3 = function (params) { return params + 2; };
// for more than one parameter, parenthesis is necessary
var myFuncName4 = function (x, y, z) { return x + y + z; };
// arrow function with no parameters
var myFuncName5 = function () { return console.log('a'); };
// samples of using arrow functions
var smartPhones = [
    { name: 'iphone', price: 649 },
    { name: 'Galaxy S6', price: 576 },
    { name: 'Galaxy Note 5', price: 489 }
];
var prices = smartPhones.map(function (smartPhone) { return smartPhone.price; });
console.log(prices);
var arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var divThree = arrayNum.filter(function (v) { return v % 3 === 0; });
console.log(divThree);
// demo concept of this and arrow functions
// this is bound to the global object Window where setTimeout belongs to
// and NOT firstObj 
var firstObj = {
    id: 100,
    counter: function () {
        setTimeout(function () {
            console.log(this);
            console.log(this.id);
        }, 1000);
    }
};
//firstObj.counter();
// we now bind the function inside setTimeout
// to secondObj 
var secondObj = {
    id: 200,
    counter: function () {
        setTimeout(function () {
            console.log(this);
            console.log(this.id);
        }.bind(secondObj), 1000);
    }
};
//secondObj.counter();
// Arrow function will cause this to lexically go up a scope
// accomplishing the same effect
var thirdObj = {
    id: 300,
    counter: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this);
            console.log(_this.id);
        }, 1000);
    }
};
//thirdObj.counter();
