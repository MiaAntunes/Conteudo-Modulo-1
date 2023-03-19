// //-----PARTE 1
let nome = prompt ("Qual o seu nome?");
let idade = prompt ("Qual sua idade");  

console.log(typeof nome, typeof idade);

/* 
  d)Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
          -Como eu não defini as duas váriaveis, o computador entende que aquela variável é do tipo undefined;

  f)Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
          -Notei que ele foi indetificado como uma string e string;
*/

alert(`Olá, ${nome}, você tem ${idade} anos.`)
console.log(`Olá, ${nome}, você tem ${idade} anos.`)


// // ----- PARTE 2
let pergunta1 = "Qual sua cor favorita?";
let resposta1 = prompt(pergunta1);
let pergunta2 = "Qual sua bebida favorita?";
let resposta2 = prompt(pergunta2);
let pergunta3 = "Qual sua comida favorita?";
let resposta3 = prompt(pergunta3);

let pergunta4 = prompt("Tu gosta de serie?");
let pergunta5 = prompt("Tu gosta de pizza?");
let pergunta6 = prompt("Tu gosta de jogos?");

let testepergunta4 = confirm("Tu gosta de serie?");
console.log(testepergunta4)



// console.log(resposta1),
// console.log(resposta2),
// console.log(resposta3),
// console.log(pergunta4),
// console.log(pergunta5),
// console.log(pergunta6)
