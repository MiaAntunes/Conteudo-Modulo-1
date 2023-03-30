const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

let indice = 1

for( indice in array ){
    console.log(`Jogador ${indice}: ${array[indice]}`)
}
/* Resposta:
Jogador 0: 27,4,20,13,14
Jogador 1: 11,15,12,8,9
Jogador 2: 5,5,12,16,4
Jogador 3: 20,33,11,12,19
Jogador 4: 3,3,4,5,10
*/


/// Duvida : Como eu começo pelo 1?