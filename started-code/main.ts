//imported interface from main-service
import { StringManipulationService } from "./main-service";

//created a class to implement the interface methods
class StringManipulations implements StringManipulationService {
  //print the varios operations on string
  print(word: String): void {
    console.log(word);
    console.log(word.toUpperCase());
    console.log(word.toLowerCase());
    var chars = word.charAt(3);
    console.log(chars);
    console.log(word + " Another string");
    console.log(word.slice(0, word.length - 3));
    console.log(word.length);
  }

  //print the every char with space
  printWithSpace(sentence: string): void {
    var spaceString = "";
    for (var i = 0; i < sentence.length; i++) {
      spaceString += sentence[i] + " ";
    }
    console.log(spaceString);
  }

  //print the no of vowels
  findVowel(word: string): void {
    var count = 0;
    var smallWord = word.toLowerCase();
    for (var i = 0; i < word.length; i++) {
      if (
        smallWord[i] === "a" ||
        smallWord[i] === "e" ||
        smallWord[i] === "i" ||
        smallWord[i] === "o" ||
        smallWord[i] === "u"
      )
        count++;
    }
    console.log("Vowels count: " + count);
  }
}

class NumbersManipulations {
  findPrime(num: number): void {
    var flag = false;
    for (var i = 2; i <= num / 2; ++i) {
      if (num % i == 0) {
        flag = true;
        break;
      }
    }
    if (!flag) console.log(num + " is a prime number.");
    else console.log(num + " is not a prime number.");
  }
  findMagic(num: number): void {
    let sum = 0;

    while (num != 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    if (sum == 1) {
      console.log("Magic Number");
    } else {
      console.log("Not a Magic Number");
    }
  }
}

var stringObject = new StringManipulations();
stringObject.print("FaceprePrograds");
stringObject.printWithSpace("FACEPREP");
stringObject.findVowel("FACEPREP");

var numObject = new NumbersManipulations();
numObject.findPrime(11);
numObject.findMagic(226);
