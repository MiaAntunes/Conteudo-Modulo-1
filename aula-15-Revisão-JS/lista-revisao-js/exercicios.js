// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  function ordenar(a,b){
    return(a - b)
  }
  return array.sort(ordenar)

  //Procurar a respeito dessa matéroa REVER
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let paresArray = array.filter(number => number%2 === 0) // No filter pode fazer uma função para a condição
  return paresArray
}
console.log(retornaNumerosPares([1,2,3,4,5,6]))

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let paresArray = array.filter(number => number%2 === 0)
  const arrayElevado = paresArray.map(number => Math.pow(number,2))
  return arrayElevado
}
console.log(retornaNumerosParesElevadosADois([1,2,3,4,5,6]))

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let numberMaior = []
  for(let indice = 0; indice < array.length; indice++){
    if(array[indice] > numberMaior){
      numberMaior = array[indice]
    }
  }
  return numberMaior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const maiorNumero = Math.max(num1,num2);
  const menorNumero = Math.min(num1,num2)
  const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
  const diferenca = () =>{
    if(num1 > 0 && num2 > 0){
      return maiorNumero - menorNumero
    }
  }
  const respostaUser = {
    maiorNumero ,
    maiorDivisivelPorMenor,
    diferenca: diferenca()
  }
  return respostaUser
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}