const numero = Number(prompt("Escreva um número"));

///// Exercicio A
if(numero%2 === 0){
    if(numero%3 === 0){
        console.log("é divisivel por 2 e 3")
    }else {
        console.log("é divisivel só por 2")
    }
}else{
    console.log("Não é divisivel nem por 2 e nem por 3")
}

///// Exercicio B
if(numero%2 === 0 && numero%3 == 0 ){
    console.log("é divisivel por 2 e 3")
}

if(numero%2 === 0 || numero%3 == 0 ){
    console.log("é divisivel por 2 ou 3")
}


