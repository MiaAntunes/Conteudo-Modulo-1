const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}
//Exercício B
const pokemon2 = {
    ...pokemon1,
    nome:"Squirtle",
    tipo:"Água",
}
pokemon1.ataque = []
//Exercício C

console.log(pokemon1)
pokemon1.ataque.push({
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
})
console.log(pokemon1);

///////Exercício D:
pokemon2.ataque =[...pokemon1.ataque];
//Detalhe o que tu quer dentro !!!
// esse ponto faz referência com o CD do terminal
console.log(pokemon2);

////////Exercício E:
// pokemon1.ataque[0].nome = "Folha Navalha"
// pokemon1.ataque[0].dano = 45
// pokemon1.ataque[0].tipo = "Grama"
// pokemon1.ataque[0].precisao = 100
// console.log(pokemon1) JEITO ERRADO!!!!!
pokemon1.ataque.push({
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
})

////////Exercício F:
// pokemon2.ataque[0].nome = "Jato de Água"
// pokemon2.ataque[0].dano = 40
// pokemon2.ataque[0].tipo = "Água"
// pokemon2.ataque[0].precisao = 100
// console.log(pokemon2);JEITO ERRADO!!!!!
pokemon2.ataque.push({
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
})

/////////Exercício G:
console.log("Pokemon Bulbasaur: ", pokemon1);
console.log("Pokemon Squirtle: ", pokemon2);

