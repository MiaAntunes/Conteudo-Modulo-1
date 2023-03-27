//Exercício Pratica Guiada:
// /////////////////////Exercício A
const estudante = {
    nome: "Camila",
    sobrenome: "Antunes",
    matricula: "02029303",
    notas: [8,10,7] // Quando tiver que colocar mais coisa dentro usa o array;
}

console.log(estudante);
/*
matricula: "02029303"
nome: "Camila"
notas: (3) [8, 10, 7]
sobrenome: "Antunes"
*/

// /////////////////////Exercício B
//>> Adicionando uma propriedade no objeto
estudante.modulo = "Módulo 1 - Fundamentos";
estudante['m'] = "sim"
 // Quando for colocado assim , sempre vai ser uma string (aqui dentro sempre vai ter [' aspas']);
console.log(estudante);
console.log("nome :", estudante.nome,
"\nsobrenome: ", estudante['sobrenome'],
"\nsegunda nota: ", estudante.notas[1],
"\nMódulo: ", estudante.modulo);


// /////////////////////Exercício B
//>> Fazendo o espalhamento (spread):
let estudante2 = {
    ...estudante,
    nome:"Pri",
    modulo: "Módulo 2",
    nostas: [...estudante.notas,9] //Ele não coloca o 9 no do Davi, pois como é um array e uma copia ainda é somente um armazenamento!!;
};
console.log(estudante)
console.log(estudante2)


