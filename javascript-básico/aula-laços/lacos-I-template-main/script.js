///// Exercicio 1
let numero = Number(prompt("Escreva um numero"))
let resp = 0

while(numero !== 0){
    resp = resp + numero
    console.log(resp)
    numero = Number(prompt("Digite outro numero"))
}


///// Exercicio 2
let number = Number(prompt("Escreva um número"))

for(x=0; x <= number; x++){
    console.log(x);
}

// Fazendo com o while
let x = 0;
while(x<=number){
    console.log(x)
    x++
}


///// Exercicio 3
const numbersArrays = [1,2,3,4,5,6,7];

for(x=0; x < numbersArrays.length ; x++){
    console.log(`O elemento de índice ${x} é ${numbersArrays[x]}`)
}



// Exercício de Fixação
// let userTipo = "administrador"

// while(userTipo.toLowerCase !== "administrador"){
//     console.log("Acesso Negado")

// }

// console.log("Acesso Liberado") 
//q que?