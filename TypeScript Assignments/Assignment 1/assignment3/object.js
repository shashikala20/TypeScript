var Order = {
    id: 123,
    title: "Hey This is tiltle",
    price: 50,
    printOrder: function () {
        console.log(this.id);
        console.log(this.title);
        console.log(this.price);
    },
    getPrice: function () {
        return this.price;
    }
};
var copy = Object.assign({}, Order);
console.log(copy);
