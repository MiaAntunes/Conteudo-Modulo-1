const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

// respostas aqui ⬇️

//Exercicio A
console.log(filme.elenco[0]);

//Exercicio B
console.log(filme.elenco[3]);

//Exercicio C
console.log(filme.transmissoesHoje);

//Exercicio D(DUVIDA!!!!!!!!)
console.log(filme.transmissoesHoje[1].horario); //////DUVIDA!!!!!
