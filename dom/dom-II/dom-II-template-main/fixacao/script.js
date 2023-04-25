function insereItem(event){
    event.insertAdjacentElement

    const input = document.getElementById("meu-input")
    const conteudoInput = input.value
    const lista = document.getElementById("lista")

    let novoItem = document.createElement("novo-item")
    novoItem.innerHTML = "<li>" + conteudoInput + "</li>"

    lista.insertAdjacentElement("beforeend", novoItem)
}