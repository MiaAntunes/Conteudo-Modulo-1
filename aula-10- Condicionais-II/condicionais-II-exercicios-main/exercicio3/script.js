//códigos a serem reescritos

// a)
const nome = prompt("Qual seu nome? Ex: Camila");

// if(nome === "José"){
// 	console.log("Oi, Zé!")
// } else {
// 	console.log("Olá, " + nome)
// }
nome === "José"? console.log("Oi, Zé!"):console.log("Olá, " + nome);

// b)
const idade = Number(prompt("Quantos anos você tem?"));
// if(idade >= 18){
// 	console.log("Pode tirar carteira de motorista!")
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista!")
// }

idade >= 18 ? console.log("Pode tirar carteira de motorista!") : console.log("Ainda não pode tirar carteira de motorista!")