export interface StringManipulationService {
  print(word: string): void;
  printWithSpace(sentence: string): void;
  findVowel(str: string): void;
}

export interface NumberManipulationService {
  indPrime(num: number): void;
  findMagic(num: number): void;
}
