let idade = Number(prompt("Qual sua idade?"));
let ensinoMedio = confirm("Você já terminou a Ensino Médio?");
let faculdade = confirm("Você está cursando alguma Faculdade?");

function imprimir(){
    if (idade >= 18 ){
        console.log("A pessoa é maior de idade");
    }else{
        console.log("A pessoa é menor de idade");
    }
    
    if(ensinoMedio === true){
        console.log("A pessoa já terminou o Ensino Médio");
    }else{
        console.log("A pessoa não terminou o Ensino Médio");
    }
    
    if(faculdade === false){
        console.log("A pessoa não está cursando alguma Faculdade");
    }else{
        console.log("A pessoa está cursando alguma Faculdade");
    }
}

console.log(imprimir())