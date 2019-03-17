// defining a variable using an interface
var firstRecord = {
    category: 'slow',
    cost: 2000
};
// defining a parameter using an interface
function printRecord(recordObj) {
    console.log(recordObj.category);
    console.log(recordObj.cost);
}
var wrongRecord = {
    cost: 30,
};
// Won't work
//printRecord (wrongRecord);
var myRecord = {
    cost: 10,
    category: "fast",
    isBlue: false,
};
printRecord(myRecord);
function processWorker(worker) {
    var status = worker.name + " is unmarried";
    if (worker.isMarried) {
        if (worker.age)
            status = worker.name + " married at " + worker.age;
        else
            status = worker.name + " is married";
    }
    return status;
}
console.log(processWorker({ name: "peter" }));
console.log(processWorker({ name: "james",
    isMarried: true
}));
console.log(processWorker({ name: "susan",
    isMarried: true,
    age: 30
}));
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var Dog = /** @class */ (function () {
    function Dog(age) {
        this.age = age;
    }
    Dog.prototype.talk = function (words) {
        console.log(words);
    };
    return Dog;
}());
var myDog = new Dog(23);
myDog.talk("bow wow");
