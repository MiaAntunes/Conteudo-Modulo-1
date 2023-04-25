const frutas = ["laranja", "limão", "uva"];

let item1 = document.querySelector("#fruta-1")
let item2 = document.querySelector("#fruta-2")
let item3 = document.querySelector("#fruta-3")
let item4 = document.querySelector("#fruta-4")

// Exercicio 1
item1.innerHTML = frutas[0]
item2.innerHTML = frutas[1]
item3.innerHTML = frutas[2]


/*Exercicio 2 ??*/
let inputFruta =document.querySelector("#input")
inputFruta.value = "Melancia"


/*Exercicio 3 */
let resultado = document.querySelector("#resultado")
function adicionar(){
    frutas.push(inputFruta.value)
    resultado.innerHTML =`<p>Foi adicionado : ${frutas}</p>`
    return resultado
}




