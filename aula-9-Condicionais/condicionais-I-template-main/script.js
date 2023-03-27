////////////////////////// Exercício 1 
// const booleano1 = false;
// const booleano2 = true;

// if(booleano1 === true){
//     alert("Positivo!")
// }else{
//     alert("Negativo")
// }

////////////////////////// Exercício 2
// const booleano3 = true;

// if(booleano1 === booleano2){
//     alert("booleano 1 é igual ao booleano2") 
// }else if(booleano2 === booleano3){
//     alert("booleano 2 é igual ao booleano3")
// }else if (booleano1===booleano3){
//     alert("booleano 1 é igual ao booleano3")
// }else{
//     alert("Não exitam valores iguais")
// }

////////////////////////// Exercício 3
// const idade = 10;

// if(idade < 16){
//     alert("Não pode votar!");
// }else{
//     if(idade >= 16 && idade <=17 || idade >= 70){
//         alert("Não tem obrigação de votar") 
//     }else {
//         alert("É obrigatório votar")
//     }
// }

////////////////////////// Exercício Fixação
const média = 0
function media(){
    if(média>=5){
        console.log("Você foi aprovado!")
    }else if(média >=3){
        console.log("Recuperação!")
    }else if(média < 3) {
        console.log("Estudante Reprovade!!")
    }else{
        console.log("Dado Inválido!!")
    }
}
console.log(media())