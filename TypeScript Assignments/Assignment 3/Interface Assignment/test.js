var circle = /** @class */ (function () {
    function circle(radius) {
        this.radius = radius;
    }
    circle.prototype.print = function () {
        console.log(this.radius);
    };
    return circle;
}());
var employee = /** @class */ (function () {
    function employee(name) {
        this.name = name;
    }
    employee.prototype.print = function () {
        console.log(this.name);
    };
    return employee;
}());
var obj1 = new circle(10);
var obj2 = new employee("Sanjay");
obj1.print();
obj2.print();
