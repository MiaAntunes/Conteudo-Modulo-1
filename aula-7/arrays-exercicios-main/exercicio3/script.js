let meusNumeros = [1,2,3,4,5];
let meusNumerosCopia = meusNumeros.slice();

let meusStrings = ["ba","ka","ma"];
let meusStringsCopia =meusStrings.slice();

let meusText = [ "Olá", "Tudo bem", "Uau"];
let meusTextCopia = meusText.slice();

//Exercicio A
// meusNumerosCopia.unshift(2);
// console.log("Original", meusNumeros);
// console.log("Copia", meusNumerosCopia);

//Exercicio B
meusStringsCopia.pop();
// //meusStringsCopia.splice(meusStringsCopia-1,1);
// console.log("Original", meusStrings);
// console.log("Copia", meusStringsCopia);

//Exercicio C
meusTextCopia.splice(1,1);
console.log("Original", meusText);
console.log("Copia", meusTextCopia);