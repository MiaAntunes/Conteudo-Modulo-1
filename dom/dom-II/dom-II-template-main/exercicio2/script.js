/*
Implemente no onclick deste botão uma função para alterar o type do input para password.
*/
function escondeSenha(event){
    event.preventDefault() // se a página estiver atualizando e porque não está funcionando!!!

    //preventDefault : previne o comportamento padrão
    const inputSenha = document.querySelector("#password")
    inputSenha.setAttribute("type", "password")
}

/**
Além disso, altere a classe CSS do elemento form na página, removendo a classe “light” e adicionando a classe “dark” 
*/
const form = document.querySelector(".light")
form.classList.remove("light")
form.classList.add("dark")





