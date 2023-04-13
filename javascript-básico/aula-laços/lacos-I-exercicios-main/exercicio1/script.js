let comerCoxinha = prompt("Deseja comer mais coxinha? Ex: S ou N");
let precoCoxinha = 2.50
let conta = 0;


while(comerCoxinha.toUpperCase() == "S"){
    conta = conta + precoCoxinha;
    comerCoxinha = prompt("Deseja comer mais coxinha? Ex: S ou N")
}
console.log(`A conta ficou em ${conta}`);


/// Fazendo com o for:

// for(let i = 0; comerCoxinha === "S"; i++){
//     conta = (conta + 2.50)*i;

// }
// console.log(conta);