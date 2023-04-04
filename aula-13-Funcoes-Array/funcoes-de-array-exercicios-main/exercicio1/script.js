const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// Exercícios 1 --- TESTE NÃO DEU
// function infosPessoaUpperCase (objeto){
//     let stringUpperCase = {}
//     for(let indice in objeto){
//         stringUpperCase[indice] = objeto[indice].toUpperCase()
//         // console.log(stringUpperCase)
//     }
//     return stringUpperCase
// }   
// console.log(infosPessoaUpperCase(infosPessoa))
console.log("---------------------------------")

function infosPessoaUpperCase(objeto){
    for(let indice in objeto){
        objeto[indice] = objeto[indice].toUpperCase()
    }
    return objeto
}

console.log(infosPessoaUpperCase(infosPessoa))
console.log("---------------------------------")


// Exercicio 2 ------
function valoresPropriedades(objeto){
    let propriedade;
    for(indice in objeto){
        propriedade = `o valor da propriedade ${indice} é ${objeto[indice]}`
        console.log(propriedade)
    } 
    
}
console.log(valoresPropriedades(infosPessoa))
console.log("---------------------------------")


// Exercicio 3 ------
function receber(objeto, callback){
    
}