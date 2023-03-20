//--------------- Exercicio A
    //>> Função Normal:
function imprimaNome(nome){
    return `Ola, ${nome}`;
}
console.log(imprimaNome(Camila));

   //>> Função Anonima:
const printName = (name)=>{
    return `Ola, ${nome}`;
}


// -------------- Exercicio B
     //>> Função Normal:
function tabuada(numero){
    for(let x=0 ; x<=10 ; x++){
        let multiplicacao = numero * x;
        console.log(`A tabuada do ${numero} vezes ${x} e ${multiplicacao}`);
        
    } 
}
console.log(tabuada(8));

     //>> Função Anonima:
function tabuada(numero){
    for(let x=0 ; x<=10 ; x++){
        let multiplicacao = numero * x;
        console.log(`A tabuada do ${numero} vezes ${x} e ${multiplicacao}`);
        
    } 
}
console.log(tabuada(8));

