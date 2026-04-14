let botaoMudaTexto = document.querySelector("#btnMudaTexto")
let titulo = document.querySelector("#titulo")

function mudaTexto() {
 titulo.innerHTML = "Helena Gata"   
}

botaoMudaTexto.addEventListener("click", mudaTexto)