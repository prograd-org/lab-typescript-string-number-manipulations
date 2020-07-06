"use strict";
exports.__esModule = true;
exports.NumbersManipulations = exports.StringManipulations = void 0;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        //Display the character at a particular position in a given string.
        var str = "Another String";
        console.log(word.concat(" " + str));
        console.log(word.slice());
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        var strWithSpace;
        for (var i = 0; i < sentence.length; i++) {
            strWithSpace = sentence.split("");
        }
        console.log(strWithSpace.join(" "));
    };
    StringManipulations.prototype.findVowel = function (str) {
        var counter = 0;
        var vowel = ["a", "e", "i", "o", "u"];
        for (var i = 0; i < str.length; i++) {
            for (var j = 0; j < 5; j++) {
                if (str.charAt(i) == vowel[j]) {
                    counter++;
                }
            }
        }
        console.log(counter);
    };
    return StringManipulations;
}());
exports.StringManipulations = StringManipulations;
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        if (num === 1) {
            console.log("Is not prime number");
        }
        else if (num === 2) {
            console.log("Is prime number");
        }
        else {
            for (var i = 2; i < num; i++) {
                if (num % i === 0) {
                    console.log("Is not a prime number");
                    break;
                }
                else {
                    console.log("Is a prime number");
                }
            }
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        var sum = 0;
        while (num != 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        if (sum == 1) {
            console.log("Is Magic Number");
        }
        else {
            console.log("Not a Magic Number");
        }
    };
    return NumbersManipulations;
}());
exports.NumbersManipulations = NumbersManipulations;
var SM = new StringManipulations();
SM.print("ProGrad");
SM.printWithSpace("ProGrad");
SM.findVowel("ProGrad");
var NM = new NumbersManipulations();
NM.findPrime(3);
NM.findMagic(101);
