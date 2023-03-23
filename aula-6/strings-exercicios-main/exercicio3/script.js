//Crie a const para a frase aqui
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

const novaFrase = frase.replace("verde", "rosa");
console.log(novaFrase)

const novaFrase2 = novaFrase.replace("azul", "laranja");
console.log(novaFrase2);

const  quebra1 = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS,'; 
const  quebra2 = 'mas não deixe o gato sair"';
console.log(quebra1+quebra2.toUpperCase());

/*Exemplo:
const parteText = frase.replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR)"*/