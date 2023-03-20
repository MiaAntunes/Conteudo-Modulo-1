//Minha Forma:
function logar(login,senha){
    const loginArmazenado = "Miau";
    const senhaArmazenada = "Miau123";

    let verificacaoLogin = login === loginArmazenado;
    let verificacaoSenha = senha === senhaArmazenada;

    return `Seu Login está ${verificacaoLogin}, e sua senha está ${verificacaoSenha}`
}

console.log(logar("Miau", "Miau123!"))