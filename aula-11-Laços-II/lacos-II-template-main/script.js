// --------------- PRÁTICA GUIADA ---------------
///// Exercicio 1
const bimestre1 = [7,9,10,5];
const bimestre2 = [8,10,5,10]
const bimestre3 = [7,9,6,10]
const bimestre4 = [9,9,5,10]

const notasDoAno = [bimestre1,bimestre2,bimestre3,bimestre4]

// for (let i = 0; i < notasDoAno.length; i++ ){
//   let soma = 0;
//   //Esse primeiro *for* ele mostra/executa o primeiro array (notasdoano, com todos os filhos array
//   for(let j = 0; j < notasDoAno[i].length; j++){
//     //Já esse for mostra/executa os outros arrays (ele aprofunda no array) -- igual Matriz
//     // console.log(notasDoAno[i][j])
//     soma += notasDoAno[i][j]
//   }
//   //Não coloque o console.log(dentro do 2° for, pois irá repetir)
//   //Tome cuidado com o variavel de comparação !!!!
//   // Se eu coloca-se j+!, iria  pegar a primeira nota de cada bimestre
//   // Coloca-se /notasDoAno.length é para ele pegar a quantidade que numeros em CADA array(Bimestre)
//   console.log(`${i+1}° Bimestre - ${soma/notasDoAno.length}`)
// }


///// Exercicio 2
// for (let i in notasDoAno){
//   let soma = 0; 

//   for(let j = 0; j < notasDoAno[i].length; j++){
//     soma += notasDoAno[i][j]
//   }

//   console.log(`${Number(i)+1}° Bimestre - ${soma/notasDoAno.length}`)
// }

///// Exercicio 3
// Duvidas???????????
for (let i in notasDoAno){
  let soma = 0; 

  for(let j of notasDoAno[i]){
    soma += notasDoAno[i][j]
  }

  console.log(`${Number(i)+1}° Bimestre - ${soma/notasDoAno.length}`)
}



















// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻