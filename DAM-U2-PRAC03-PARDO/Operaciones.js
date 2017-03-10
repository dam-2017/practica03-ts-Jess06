"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operaciones = (function () {
    function Operaciones() {
    }
    Operaciones.prototype.add = function (num1, num2) {
        return num1 + num2;
    };
    Operaciones.prototype.sub = function (num1, num2) {
        return num1 - num2;
    };
    Operaciones.prototype.isPrime = function (num) {
        if (num < 2)
            return false;
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    };
    Operaciones.prototype.factorial = function (num) {
        var fact = 1;
        for (var i = 1; i < num; i++, fact *= i) { }
        return fact;
    };
    return Operaciones;
}());
exports.Operaciones = Operaciones;
