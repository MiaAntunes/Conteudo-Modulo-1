const numeroUser = 9; // Colocar o prompt aqui!!!
const baseTabuada = [1,2,3,4,5,6,7,8,9,10]; 

/// Ue paraa fazer com o for in, não precisaria de um array

//const tabuada = Number(prompt("Escreva um número"));

for(let i in baseTabuada){
    let multiplicação = numeroUser * baseTabuada[i]
    console.log(`${numeroUser} x ${baseTabuada[i]} = ${multiplicação}`)
} 
