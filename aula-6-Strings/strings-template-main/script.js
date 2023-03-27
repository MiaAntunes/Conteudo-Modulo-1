const nome = prompt("Qual seu nome?");
const nomeMaiuscula = nome.toUpperCase();
const cor = prompt("Qual sua cor favorita?");
const frase = prompt("Uma citação favorita")

const concateamento = 'A cor favorita de '+ nome + ' é '+ cor;
const template = `A cor favorita de ${nome} é ${cor}`

console.log(concateamento);
console.log(template);


//Exercicio 2
const novaFrase = concateamento + " é " + frase;
console.log("Nova Frase:", novaFrase);

const dadosUsuario = `Nome: ${nome}\nCor favorita: ${cor}\nCitação Favorita: "${frase}" `
console.log(dadosUsuario)

//Exercicio 2
console.log(nome.length);