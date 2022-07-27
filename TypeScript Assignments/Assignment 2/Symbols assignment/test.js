var genFibonacci = /** @class */ (function () {
    function genFibonacci(prev, curr) {
        this.previourNo = prev;
        this.currentNo = curr;
    }
    genFibonacci.prototype.next = function () {
        return this.previourNo + this.currentNo;
    };
    return genFibonacci;
}());
var obj1 = new genFibonacci(1, 2);
console.log(obj1.next());
