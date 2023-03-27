const nacionalidade = prompt("Escreva aqui sua nacionalidade! (Exemplo: brasileira)");
let user = nacionalidade.toLowerCase();

function verificarNacionalidade(){
    if(user === "brasileira"){
        console.log("Brasileira")
    }else if(user === "argentina"){
        console.log("Argentina")
    }else if(user === "uruguaia"){
        console.log("Uruguaia")
    }else if(user === "chilena"){
        console.log("Chilena")
    }else if(user === "colombiana"){
        console.log("Colombiana")
    }else{
        console.log("Nacionalidade não encontrada!")
    }
}     

console.log(verificarNacionalidade())