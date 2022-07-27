function checkArm(num) {
    var temp = num;
    var r = 0;
    var sum = 0;
    while (temp > 0) {
        r = temp % 10;
        sum = sum + (r * r * r);
        temp /= 10;
    }
    if (num === sum) {
        return true;
    }
    return false;
}
;
for (var i = 0; i < 1000; i++) {
    var ans = checkArm(i);
    if (ans === true) {
        console.log(i);
    }
}
var iterable1 = [153, 370, 371, 407];
function createIterator1() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    var count = 0;
    return {
        getNextArmstrong1: function () {
            return count < array.length ?
                { value: array[count++], done: false } :
                { value: undefined, done: true };
        }
    };
}
var myIterator1 = createIterator1(iterable1);
console.log(myIterator1.getNextArmstrong1());
console.log(myIterator1.getNextArmstrong1());
console.log(myIterator1.getNextArmstrong1());
console.log(myIterator1.getNextArmstrong1());
console.log(myIterator1.getNextArmstrong1());
