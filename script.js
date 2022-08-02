let numero = 0

function zerar(){
    numero = 0 
    mostrarnatela()
}

function aumentar(){
    numero = numero +1
    mostrarnatela()
}

function diminuir(){   
numero = numero -1
mostrarnatela()

}
// jogar o estado da aplicação na tela

function mostrarnatela() {
    const p = document. querySelector ("p")
    p.innerText = numero
}