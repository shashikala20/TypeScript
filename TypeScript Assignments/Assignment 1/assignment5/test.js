var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//a
function add(a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    console.log(a + b);
}
add();
add(2, 2);
add(10, 2);
//b
var displayFriend = function (name) {
    var friend = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        friend[_i - 1] = arguments[_i];
    }
    // console.log(name);
    friend.push(name);
    for (var _a = 0, friend_1 = friend; _a < friend_1.length; _a++) {
        var frn = friend_1[_a];
        console.log(frn);
    }
};
displayFriend("abc", "xyz", "try");
var friendList = ["abc", "xyz", "try"];
displayFriend.apply(void 0, __spreadArray(["Asim"], friendList, false));
displayFriend.apply(void 0, __spreadArray(["Rahul"], friendList, false));
//c
console.log(" ");
var pringCapitalName = function () {
    var name = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        name[_i] = arguments[_i];
    }
    for (var _a = 0, name_1 = name; _a < name_1.length; _a++) {
        var n = name_1[_a];
        console.log(n.toUpperCase());
    }
};
var nameList = ["Ravi", "Kumar", "Sanjay"];
pringCapitalName.apply(void 0, nameList);
