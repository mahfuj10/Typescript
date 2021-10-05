"use strict";
var car = /** @class */ (function () {
    function car(model, price) {
        this.model = model;
        this.price = price;
        this._millage = 100000;
    }
    car.prototype.getActualMillage = function () {
        var realMillage = this._millage + 50000;
        return realMillage;
    };
    car.prototype.getTotalPrice = function (tax) {
        var taxAmount = this.price * tax / 100;
        var total = this.price + taxAmount;
        return total;
    };
    return car;
}());
var toyota = new car('toyota', 100000);
var totalPrice = toyota.getTotalPrice(25);
