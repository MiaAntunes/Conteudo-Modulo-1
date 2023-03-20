// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

//--------Minha forma de fazer
function numeroPar (numero){
    let parOuImpar = (numero %2 === 0);
    let soma = numero + 10;
    let multiplica = numero * numero;
    return `Numero é par: ${parOuImpar}, a soma é ${soma}, e sua multiplicação consigo mesma é ${multiplica}`;
}
console.log(numeroPar(32))


// //---------Forma do Professor
function operacoes(numero){
    const verifica = (numero %2 ===0);
    const soma = numero + 10;
    const multiplica = numero * numero;
    return `O numero ${numero} é par? ${verifica}.Somando com 10, o resultado é ${soma} e multiplicando por ele mesmo o resultado é ${multiplica}`
}
let retorno = operacoes(23)
console.log(retorno)