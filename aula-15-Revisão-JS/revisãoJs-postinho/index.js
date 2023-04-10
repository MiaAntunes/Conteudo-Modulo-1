
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    //  Sua lógica aqui
    return `No comparador de igualdade ${a} === ${b} é ${a === b}`
}
console.log(checarIgualdade(1,2))

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior (a,b){
    return `${a} > ${b}? ${a>b}` 
}
console.log(verificaSeEMaior(1,2));
console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    const usuarios = [
        nomeDoUsario = prompt("Qual seu nome?"),
        anoDeNascimento = Number(prompt("Qual seu Ano de Nascimento?")),
        idadeDoUsuario = 2023 - anoDeNascimento,
        senhaDoUsuario = Number(prompt("Digite um senha:")),
        nacionalidade = prompt("Qual país você nasceu?"),
    ]
    // Duvida em como colocar a quantidade de senhas 
    
    if(usuarios[2] >= 18 && usuarios[4] === "brasil"){
        console.log(`Dados do Cadastro: ${usuarios}`)
        console.log("Seu cadastro foi realizado com sucesso!!!")
    }else{
        console.log("Não foi possível realizar seu cadastro!!!")
    }
}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    const coloqueSuaSenha = prompt("Digite sua senha:")

    if(coloqueSuaSenha === login){
        console.log("Usuário Logado")
    }else{
        console.log("Senha Inválida")
    }
}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {
    const nomeUsuario = prompt("Qual seu nome?")
    const nomeVacina = prompt("Qual o nome da vacina que você tomou?")
    let tempoAtual = new Date()
    console.log(tempoAtual)

    let calculoVacinacao;
    
    if(nomeVacina.toLowerCase === "coronavac"){
        calculoVacinacao = (tempoAtual.getDate + 28)

        if(calculoVacinacao > 31){
            calculoVacinacao = calculoVacinacao - 30
        }

    }else if(nomeVacina.toLowerCase === "astrazenica"){
        calculoVacinacao = (tempoAtual.getDate + 90)
        if(calculoVacinacao > 31){
            calculoVacinacao = calculoVacinacao - 30
        }else if( calculoVacinacao ){
            // FALTA Terminar
        }
        
    }

}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    

    //  Sua lógica aqui


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro = () => {
    //  Sua lógica aqui
}
console.log(cadastro());

const login = () => {
    //  Sua lógica aqui
}
console.log(login());

const primeiraDose = () => {
//  Sua lógica aqui
}
console.log(primeiraDose())
const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDose("ALGUM NOME AQUI"));

const avisoAosAtrasados = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasados());