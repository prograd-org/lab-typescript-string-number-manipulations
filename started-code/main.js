"use strict";
exports.__esModule = true;
//created a class to implement the interface methods
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    //print the varios operations on string
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        var chars = word.charAt(3);
        console.log(chars);
        console.log(word + " Another string");
        console.log(word.slice(0, word.length - 3));
        console.log(word.length);
    };
    //print the every char with space
    StringManipulations.prototype.printWithSpace = function (sentence) {
        var spaceString = "";
        for (var i = 0; i < sentence.length; i++) {
            spaceString += sentence[i] + " ";
        }
        console.log(spaceString);
    };
    //print the no of vowels
    StringManipulations.prototype.findVowel = function (word) {
        var count = 0;
        var smallWord = word.toLowerCase();
        for (var i = 0; i < word.length; i++) {
            if (smallWord[i] === "a" ||
                smallWord[i] === "e" ||
                smallWord[i] === "i" ||
                smallWord[i] === "o" ||
                smallWord[i] === "u")
                count++;
        }
        console.log("Vowels count: " + count);
    };
    return StringManipulations;
}());
var stringObject = new StringManipulations();
stringObject.print("FaceprePrograds");
stringObject.printWithSpace("FACEPREP");
stringObject.findVowel("FACEPREP");
