var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(title) {
        this.name = title;
        this.age = 40;
        this.isMarried = false;
    }
    Human.prototype.talk = function () {
        return 'My name is ' + this.name;
    };
    return Human;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(title, cgpa) {
        var _this = 
        // must call constructor of base class
        _super.call(this, title) || this;
        _this.cgpa = cgpa;
        return _this;
    }
    // this overrides the original method 
    // from the parent class
    Student.prototype.talk = function () {
        return 'I have got an awesome CGPA of ' + this.cgpa;
    };
    Student.prototype.laugh = function () {
        // can also access methods inherited from 
        // parent class
        console.log(_super.prototype.talk.call(this));
        // can access protected in child class
        console.log(this.isMarried);
        // cannot access private in child class
        //console.log(this.age);
        console.log('hahahaha');
    };
    Student.university = 'UTAR';
    return Student;
}(Human));
var peter = new Human('Peter');
console.log(peter.name);
// can't do this, its private
//console.log(peter.age);
console.log(peter.talk());
var james = new Student('James', 3.4);
console.log(james.talk());
james.laugh();
// Static properties are accessed directly
console.log(Student.university);
