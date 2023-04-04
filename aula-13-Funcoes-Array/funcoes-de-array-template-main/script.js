// const arrayNumeros = [0,8,5,7,2,1]

// // Exercicio 1 ------
// const multiplicaPor3 = (array) =>{
//   const novoArray = []
//   for (let i = 0; i< array.length; i++){
//     const numeroMultiplicado = array[i] * 3
//     novoArray.push(numeroMultiplicado)
//   }
//   return novoArray
// }
// console.log(multiplicaPor3(arrayNumeros))


// // Exercicio 2 ------
// const retornaPares = (array) =>{
//   const novoArray = []
//   for(let element of array){ // Esse é um loop para fazer em todos os arrays
//     if(element % 2 === 0){
//       novoArray.push(element)
//     }
//   }
//   return novoArray
// }
// console.log(retornaPares(arrayNumeros))


// // Exercicio 1/MAP ------
// const arrayMultiplicado = arrayNumeros.map((element, indice, arrayInteiro)=>{ //
//   return element *3
// })
// console.log(arrayMultiplicado)


// // Exercicio 2/Filter -----
// const arrayPares = arrayNumeros.filter((element, indice, arrayInteiro)=>{
//   if(element % 2 === 0){
//     return true //Pois se colocarmos só o element ele não vai filtrar o 0 como false
//   }
// })
// console.log(arrayPares)



/////////Exercicio Fixação 
const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

// function aumentarVida(poke){
//   console.log()
// }

// function aumentarVida (poke){
//   const vida = [
//     ...poke,
    
//   ]
// }

// console.log(aumentarVida)

// const pokeVidaCheia = pokemons.map(aumentarVida)
// console.log(pokeVidaCheia)

// const pokemonsFogo = pokemons.filter((fogo)=>{
//   return fogo.tipo === "fogo"
// })
// console.log(pokemonsFogo)
