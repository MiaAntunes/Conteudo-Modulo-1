function checaCaps(event){
    const paragrafo = document.querySelector("#mensagem")
    console.log(event.key)
    if(event.key === "Shift"){
        paragrafo.innerHTML = "ATENÇÃO: SEGURANDO O SHIFT"
    }else{
        paragrafo.innerHTML = ""
    }
}