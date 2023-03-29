//// Exercícío 1
// const idadeDepende = 18
// if(idadeDepende >= 13){

//     if(idadeDepende <= 17){
//         console.log("a pessoa depedente pode ter o cartão vinculado ao seu")
//     }else {
//         console.log(" a pessoa depedente tem idade maior que 17 anos, consulte as opções do labank")
//     }
// }else{
//     console.log("A pessoa depende tem menos de 13 anos e ainda não pode ter o cartão")
// }

// // >> Outro jeito:
// if(idadeDepende >= 13 && idadeDepende <=17){
//     console.log("a pessoa depedente pode ter o cartão vinculado ao seu")
// }else{
//     console.log("Consulte outras possibilidades")
// }


///// Exercício 2
// const user = confirm("Você possui conta?");

// user.toLowerCase() === "sim" ? 
//        console.log("Boas Vindas"): 
//        console.log("Faça um cadastro em nosso site!")

////// Exercicio 4 - Switch Case
// const resp = 'black';

// switch (resp){
//     case 'fácil':
//         console.log("Você escolheu o fácil");
//         break;
//     case 'black':
//         console.log("Você escolheu o Cartão Black");
//         break;
//     case 'Platinum':
//         console.log("Você escolheu o Cartão Planitum")
//         break;
//     case 'Master Gold':
//         console.log("Você escolheu o Cartão Master Golden")
//         break
//     default:
//         console.log("Escolha umas das quartos opções disponíveis")
// }

////// Exercicio 5 - Fixação:
const numero =  Number(prompt("Escreva um numero"))

// exercicio A
if (numero %2 === 0){
    if(numero %3 === 0){
        console.log("é divisível por 2 e 3")
    }
}

// exercicio A
if (numero %2 === 0 && numero %3 === 0){
    console.log("é divisível por 2 e 3")

    numero === 30 ? console.log("Ufa, acertei") : console.log("Não foi dessa vez")
    
    switch (numero){
        case 6:
            console.log("é 6");
            break
        case 12:
            console.log("é 12");
            break       
        case 18:
            console.log("é 18");
            break   
        case 24:
            console.log("é 24");
            break 
        case 30:
            console.log("é 30");
            break     
        default:
            console.log("O número é maior que 30 ou menos que 6!")
            break
    }
}