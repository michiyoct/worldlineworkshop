var Vehicle = /** @class */ (function () {
    // Parameter properties
    // shortcut for declaring and 
    // assigning properties in one location
    function Vehicle(name, isLocal) {
        this.name = name;
        this.isLocal = isLocal;
    }
    Object.defineProperty(Vehicle.prototype, "maxSpeed", {
        // accessor getter
        get: function () {
            return this._maxSpeed;
        },
        // accessor setter
        set: function (newSpeed) {
            if (newSpeed > 0 && newSpeed < 150)
                this._maxSpeed = newSpeed;
            else
                console.log("Invalid speed");
        },
        enumerable: true,
        configurable: true
    });
    return Vehicle;
}());
var car = new Vehicle("mazda", false);
console.log(car.name);
car.maxSpeed = 30;
// results in error
car.maxSpeed = 5000;
