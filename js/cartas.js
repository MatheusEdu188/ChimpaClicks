const reset = document.querySelector(".botaoresetar")



reset.addEventListener("click", ()=>{
    localStorage.clear();
    location.reload()
})




const cartasModal = document.querySelector(".modalCarta")
const modalBody = document.querySelector(".modalBodyCarta")
const cartaicon = document.querySelector(".cartaicon")
const fecharmodalCarta = document.querySelector(".fecharmodalCarta")

let modalcarta = false

cartaicon.addEventListener("click", ()=>{
    if(modalcarta == false){
        cartasModal.style.display = "flex"
        modalcarta = true
    } else{
        cartasModal.style.display = "none"
        modalcarta = false
    }
    
})


fecharmodalCarta.addEventListener("click", ()=>{
    cartasModal.style.display = "none"
    modalcarta = false
})

const cartas = [
    {
        nome: "Amor Primata.",
        preco: 0,
        trofeuNecessario: 0,
        texto: "Acho que estou apaixonado...<br>Hoje conheci alguém que me deixou sem fôlego. Uma garota incrível, linda de um jeito que parece fora do comum. Ela é famosa por aqui, e só de conseguir dizer “oi” para ela, meu coração disparou. Ela não respondeu, mas só o fato de ter falado já fez meu dia brilhar.<br>Passei horas tentando descobrir o que ela gosta. Descobri que ela admira macacos ricos, com presença, e que tenham conseguido superar os Quatro Caminhos. Os Quatro Caminhos… são um lugar de lendas, onde macacos vão para morrer... Não de forma literal... bem, vc vai entender. Dizem que ninguém jamais chegou ao fim. Talvez seja por isso que ela ainda esteja sozinha.<br>Não quero me enganar demais, mas sinto que posso ter uma chance. A partir de hoje, começo minha própria jornada. Vou me tornar tudo o que ela procura. Não sou bonito o suficiente, ainda não, mas sei que posso conquistar isso. Cada passo será uma batalha, cada desafio, uma prova. E, no final, talvez eu finalmente consiga estar ao lado dela.",

    },

]


for(let carta of cartas){
    carta = `<h2 class="tituloCarta">${carta.nome}</h2>
    <p class="descricaoCarta"> Preço: ${carta.preco} Trofeus: ${carta.trofeuNecessario}</p>`
    const novaDiv = document.createElement("div")
    novaDiv.classList.add("cartas")
    novaDiv.innerHTML = carta
    modalBody.appendChild(novaDiv)
}
