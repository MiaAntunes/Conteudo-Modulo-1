/*
No template HTML do exercício, temos uma lista de elementos. Utilizando a manipulação do DOM, acrescente um item ao começo da lista e outro ao final. O texto dos elementos deve ser “Item 0” e “Item 5”, respectivamente.
*/

//Criar um elemento 
const item0 = document.createElement("li"); // é o nome da Tag

//Criar um text para o conteúd
const conteudoDoItem = document.createTextNode("Item 0")

//Acrescentar o texto dentro do elemento
item0.appendChild(conteudoDoItem)

//Achar o local onde adicionar
const lista = document.querySelector("#lista")
// InsertAdjacentElement (é adicionar o elemento a lista) sendo "afterbegin é o locar", e item que queremos adicionar)
lista.insertAdjacentElement("afterbegin", item0)

//Mesma coisa-------
const item5 = document.createElement("li")
const conteudoDoItem5 =  document.createTextNode("Item 5")
item5.appendChild(conteudoDoItem5)
lista. insertAdjacentElement("beforeend",item5)

console.log(lista)