const paragrafo = document.getElementById("#paragrafo")

const input = document.getElementById("#texto")

const mostrarValorInput = () =>{
    console.log(input.value)
}

function mudarTexto(){
    paragrafo.innerHTML = input.value
}