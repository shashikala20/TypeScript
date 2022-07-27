var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var account = /** @class */ (function () {
    function account(id, name, balance) {
        this.id = id,
            this.name = name,
            this.balance = balance;
    }
    account.prototype.getId = function () {
        return this.id;
    };
    account.prototype.getbalace = function () {
        return this.balance;
    };
    account.prototype.getname = function () {
        return this.name;
    };
    return account;
}());
var savaingAccount = /** @class */ (function (_super) {
    __extends(savaingAccount, _super);
    function savaingAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.interest = 5;
        _this.cash_credit = 0;
        return _this;
    }
    savaingAccount.prototype.setInterest = function (interest) {
        this.interest = interest;
    };
    savaingAccount.prototype.setCashCredit = function (credit) {
        this.cash_credit = credit;
    };
    return savaingAccount;
}(account));
var currentAccount = /** @class */ (function (_super) {
    __extends(currentAccount, _super);
    function currentAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.interest = 5;
        _this.cash_credit = 0;
        return _this;
    }
    currentAccount.prototype.setInterest = function (interest) {
        this.interest = interest;
    };
    currentAccount.prototype.setCashCredit = function (credit) {
        this.cash_credit = credit;
    };
    return currentAccount;
}(account));
var obj1 = new savaingAccount(123, "Saurabh", 100);
var obj2 = new savaingAccount(124, "Sanjay", 1000);
var obj3 = new savaingAccount(122, "Yuvraj", 200);
var obj4 = new currentAccount(127, "Shashi", 20002);
var obj5 = new currentAccount(121, "Rahul", 10002);
var arr = [obj1, obj2, obj3, obj4, obj5];
var sum = 0;
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var a = arr_1[_i];
    sum = sum + a.getbalace();
}
console.log(sum);
