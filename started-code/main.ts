import { StringManipulationService } from "./main-service"
import {NumberManipulationService } from "./main-service"


export class StringManipulations implements StringManipulationService{
    

    print(word: string): void{

        console.log(word)
        console.log(word.toUpperCase())
        console.log(word.toLowerCase())
        //Display the character at a particular position in a given string.
        let str:string = "Another String"
        console.log( word.concat(" "+str))

        console.log(word.slice())
        console.log(word.length)

    }

    printWithSpace(sentence: string): void{
        
        var strWithSpace: string[]
        
        for (let i = 0; i < sentence.length; i++) {

            strWithSpace = sentence.split("")
        }
        console.log(strWithSpace.join(" "))
    }

    findVowel(str: string): void{
        var counter:number = 0
        const vowel:String[] = ["a","e","i","o","u"]
        
        for (let i = 0; i < str.length;i++) {
            for (let j = 0; j < 5; j++){
                if (str.charAt(i) == vowel[j]) {
                    counter++
                }
            }

        }
        console.log(counter)
    }

}



export class NumbersManipulations implements NumberManipulationService{

    findPrime(num: number):void {
        
        if (num === 1) {
            console.log("Is not prime number")
        }
        else if(num === 2){
            console.log("Is prime number")
        }
        else {
            for (let i = 2; i < num; i++){
                if (num % i === 0) {
                    console.log("Is not a prime number")
                    break
                }
                else {
                    console.log("Is a prime number")
                }
            }
        }
        
    }

    findMagic(num: number): void {
        
        let sum = 0;

        while (num!=0) {
            sum += num % 10;
            num = Math.floor(num / 10)
        }        
        if (sum == 1) {
                console.log("Is Magic Number")
            }
            else {
                console.log("Not a Magic Number")
            }
    }

}

var SM = new StringManipulations()
SM.print("ProGrad")
SM.printWithSpace("ProGrad")
SM.findVowel("ProGrad")

var NM = new NumbersManipulations()
NM.findPrime(3)
NM.findMagic(101)
