//--------------- Exercicio A
const somar = (number1, number2) =>{
    let soma = number1 + number2;
    return `A soma dos dois números é ${soma}`;
}
const subtrair =  (number1, number2) =>{
    let subtracao = number1 - number2;
    return `A subtração dos dois números é ${subtracao}`;
}

const multiplicar = (number1, number2) =>{
    let multiplicacao = number1 + number2;
    return `A multiplicação dos dois números é ${multiplicacao}`;
}
const dividir = (number1, number2) =>{
    let divisao = number1/number2
    return `A divisão dos dois números é ${divisao}`;
}

//--------------- Exercicio A
let receberNumero1 = Number(prompt("Escreva um números"));
let receberNumero2 = Number(prompt("Escreva outro números"));

console.log(somar(receberNumero1,receberNumero2));
console.log(subtrair(receberNumero1,receberNumero2));
console.log(multiplicar(receberNumero1,receberNumero2));
console.log(dividir(receberNumero1,receberNumero2));
