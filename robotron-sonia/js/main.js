const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        mudaNumero(evento.target.textContent, evento.target.parentNode)
    })
})

function mudaNumero(operacao, controle) {
    const peca = controle.querySelector(".controle-contador")

    if(operacao === "+") {
        peca.value = parseInt(peca.value) + 1
        
    } 

    else {
        peca.value = parseInt(peca.value) - 1
    }
}