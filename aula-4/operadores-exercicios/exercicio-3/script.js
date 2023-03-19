// -------------------------------------- Parte 1 -------------------------------------------------
let n1 = 5>20 && 5<2;
let n2 = 5==5 || 5 == "5";
let n3 = 20>50; 
let n4 = 20>50 && 50>60;

console.log(n1);
console.log(n2);
console.log(!n3);
console.log(!n4);

// -------------------------------------- Parte 2 -------------------------------------------------
let nome = "Fulano da Silva";
let filhes = 2;
let comissaoJaneiro = 5784.50 * 0.1;
let comissaoFeveiro = 3418.41 * 0.1;
let comissaoMarco = 4124.10 * 0.1;
let comissaoAbril = 1874.00 * 0.1;
let comissaoMaio = 7000 * 0.1;
let comissaoJunho = 9450 * 0.1;
let inss = 0.05;
let salarioFixo = 2000;
let auxilioCreche = 45.50;

let salarioMaisCreche = salarioFixo + (auxilioCreche*filhes) ;
console.log(`O salário fixo mais o auxílio creche ${salarioMaisCreche.toFixed(2)}`);

console.log(`Receberá de comissão em janeiro ${comissaoJaneiro.toFixed(2)}`);

let descontJaneiro = (salarioFixo + comissaoJaneiro)*0.05
console.log(`Será descontado em janeiro pelo INSS ${descontJaneiro.toFixed(2)}`);

       // Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos:
let salarioJaneiro = salarioFixo + comissaoJaneiro 
salarioJaneiro -= salarioJaneiro * 0.05;
salarioJaneiro += (auxilioCreche*filhes);
console.log(`Janeiro: ${salarioJaneiro.toFixed(2)}`);

let salarioFevereiro = salarioFixo + comissaoFeveiro;
salarioFevereiro -= salarioFevereiro * 0.05;
salarioFevereiro += (auxilioCreche*filhes);
console.log(`Fevereiro: ${salarioFevereiro.toFixed(2)}`);

let salarioMarco = salarioFixo + comissaoMarco;
salarioMarco -= salarioMarco * 0.05;
salarioMarco += (auxilioCreche*filhes);
console.log(`Março: ${salarioMarco.toFixed(2)}`); 
 
let salarioAbril = salarioFixo + comissaoAbril;
salarioAbril -= salarioAbril * 0.05;
salarioAbril += (auxilioCreche*filhes);
console.log(`Abril: ${salarioAbril.toFixed(2)}`);

let salarioMaio = salarioFixo + comissaoMaio;
salarioMaio -= salarioMaio * 0.05;
salarioMaio += (auxilioCreche*filhes);
console.log(`Maio: ${salarioMaio.toFixed(2)}`);


let salarioJunho = salarioFixo + comissaoJunho;
salarioJunho -= salarioJunho * 0.05;
salarioJunho += (auxilioCreche*filhes);
console.log(`Junho: ${salarioJunho.toFixed(2)}`);

let mediaSalarial = (salarioJaneiro + salarioFevereiro + salarioMarco + salarioAbril + salarioMaio + salarioJunho)/6
console.log(`A média salarial é de ${mediaSalarial.toFixed(2)}`);


