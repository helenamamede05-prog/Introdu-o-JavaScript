let primeiroNumero = document.querySelector("#primeiroNumero")
let segundoNumero = document.querySelector("#segundoNumero")
let btnSoma = document.querySelector("#btnSoma")
let apresentaResultado = document.querySelector("#resultado")

function soma() {
    let resultado = Number(primeiroNumero.value) + Number(segundoNumero.value)
    
    apresentaResultado.innerHTML = 'Resultado: ${resultado}'
}

btnSoma.addEventListener("click", soma)