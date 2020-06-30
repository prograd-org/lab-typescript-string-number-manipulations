"use strict";
exports.__esModule = true;
var str1 = "swati";
var str2 = "saxena";
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        //Display the given string without any modifications (use console.log to print)
        console.log("WORD IS: " + word);
        //Disptsc main.tslay the given string in uppercase.
        console.log("IN UPPERCASE: " + word.toUpperCase());
        //Display the given string in lowercase.
        console.log("IN LOWERCASE: " + word.toLowerCase());
        //Display the character at a particular position in a given string.
        console.log("CHARCTER AT POSITION: " + word.charAt(3));
        //Concatenate the given string with another string.
        console.log("CONCATENATION OF THE STRING IS :" + str1.concat(str2));
        //Slice the given string and display.
        console.log("SLICE IS :" + word.slice(1, -1));
        //Find the length of the given string
        console.log("LENGTH OF THE STRING IS: " + word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log("letters with space " + sentence.split("").join(" "));
    };
    StringManipulations.prototype.findVowel = function (str) {
        var vcount = 0;
        var string = str.toString();
        for (var i = 0; i < string.length; i++) {
            if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
                vcount += 1;
            }
        }
        console.log("NUMBER OF VOWELS IN THE STRING IS: " + vcount);
    };
    return StringManipulations;
}());
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        if (num == 1) {
            console.log("not a prime number");
        }
        else if (num === 2) {
            console.log("number is prime");
        }
        else {
            for (var i = 0; i < num; i++) {
                if (num % i === 0) {
                    console.log("Not a prime number");
                }
            }
            console.log("Number is prime");
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        if (num % 9 === 1) {
            console.log("Magic number");
        }
        else {
            console.log("not a magic number");
        }
    };
    return NumbersManipulations;
}());
var obj = new StringManipulations();
obj.print("swati");
obj.printWithSpace("hypothesis");
obj.findVowel("encyclopedia");
var numobj = new NumbersManipulations();
numobj.findPrime(11);
numobj.findMagic(199);
