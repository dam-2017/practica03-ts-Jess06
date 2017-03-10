"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(str) {
        this.str = str;
    }
    Cadena.prototype.isPalindrome = function () {
        var strNoSpaces = this.str.replace(/ /g, "");
        strNoSpaces = strNoSpaces.toLowerCase();
        for (var i = 0, j = strNoSpaces.length - 1; i < Math.floor(strNoSpaces.length / 2); i++, j--) {
            if (strNoSpaces[i] != strNoSpaces[j]) {
                return false;
            }
        }
        return true;
    };
    Cadena.prototype.countVowels = function () {
        var a = 0;
        var e = 0;
        var i = 0;
        var o = 0;
        var u = 0;
        var current;
        for (var j = 0; j < this.str.length; j++) {
            current = this.str[j].toLowerCase();
            switch (current) {
                case "a":
                    a++;
                    break;
                case "e":
                    e++;
                    break;
                case "i":
                    i++;
                    break;
                case "o":
                    o++;
                    break;
                case "u":
                    u++;
                    break;
            }
        }
        return "Vocales:\n        a: " + a + "\n        e: " + e + "\n        i: " + i + "\n        o: " + o + "\n        u: " + u;
    };
    Cadena.prototype.countLetters = function () {
        var letters = this.str.length;
        for (var i = 0; i < letters; i++) {
            if (this.str[i] == " ") {
                letters--;
            }
        }
        return letters;
    };
    Cadena.prototype.countWords = function () {
        var cadenaSplit;
        cadenaSplit = this.str.split(" ");
        return cadenaSplit.length;
    };
    return Cadena;
}());
exports.Cadena = Cadena;
