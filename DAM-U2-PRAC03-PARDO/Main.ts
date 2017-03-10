import { Cadena } from './Cadena';
import { Operaciones } from './Operaciones';

let str = new Cadena ("Anita lava la tina");

console.log("Letras:" + str.countLetters());
console.log(str.countVowels());
console.log("Palabras: "+str.countWords());
console.log("Es palíndormo: "+str.isPalindrome());

let str2 = new Cadena ("El cielo es azul");
console.log("Letras:" + str2.countLetters());
console.log(str2.countVowels());
console.log("Palabras: "+str2.countWords());
console.log("Es palíndormo: "+str2.isPalindrome());


let op = new Operaciones();

console.log("Suma: "+op.add(10, 8));
console.log("Resta: "+op.sub(20, 4));
console.log("Factorial: "+op.factorial(10));
console.log("Es primo: "+op.isPrime(17));
console.log("Es primo: "+op.isPrime(8));
