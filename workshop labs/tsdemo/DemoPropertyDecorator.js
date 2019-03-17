var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function WhoIReallyAm(label) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: function () { return "awesome " + key + " which should be " + label; },
        });
    };
}
var Test = /** @class */ (function () {
    function Test() {
        this.name = 'thanos';
        this.occupation = 'galaxy destroyer';
    }
    __decorate([
        WhoIReallyAm('ironman')
    ], Test.prototype, "name", void 0);
    return Test;
}());
var t = new Test();
console.log(t.name);
console.log(t.occupation);
