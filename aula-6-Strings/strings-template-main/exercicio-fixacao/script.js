let nome = prompt("Qual seu nome?");
let email = prompt("Qual seu email?");

let frase = `O e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${nome}`;

console.log(frase);
console.log(frase.length);

const frase1 = frase.replace("r","X");
console.log(frase1);

console.log(frase.includes("@"));