var arr = ["abc", "abcd", "xyzabc"];
var obj = [];
var objArr = function (arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var a = arr_1[_i];
        obj.push({ name: a, length: a.length });
    }
};
objArr(arr);
console.log(obj);
