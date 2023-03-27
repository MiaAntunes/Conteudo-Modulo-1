//--------------- Exercicio A
function somaNumeros(numero1,numero2){
    let soma = numero1 + numero2
    return `A soma dos dois numero é ${soma}`
}
console.log(somaNumeros(5,10));


//--------------- Exercicio B
function maiorMenor(n1,n2){
    let comparação = n1 > n2;
    return `O primeiro numero é maior que o segunda? ${comparação}`
}
console.log(maiorMenor(12,9));

//--------------- Exercicio C
function parOuImpar(number){
    let verificacao = number % 2 === 0;
    return `O número é par? ${verificacao}`
}
console.log(parOuImpar(6));

//--------------- Exercicio D
function descontoSalario(salario){
    let desconto = salario * 0.1;
    let salarioLiquido = salario - desconto;
    return `O salário líquido é ${salarioLiquido}`;
}
console.log(descontoSalario(1200))