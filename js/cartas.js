const reset = document.querySelector(".botaoresetar")
const modalEscolhaReset = document.querySelector(".modalEscolhaReset")
const escolhaResetSim = document.getElementById("escolhaResetSim")
const escolhaResetNao = document.getElementById("escolhaResetNao")




reset.addEventListener("click", () => {
    modalEscolhaReset.style.display = "flex"
})

escolhaResetSim.addEventListener("click", () => {
    localStorage.clear();
    location.reload()
})

escolhaResetNao.addEventListener("click", () => {
    modalEscolhaReset.style.display = "none"
})





const cartasModal = document.querySelector(".modalCarta")
const modalBody = document.querySelector(".modalBodyCarta")
const cartaicon = document.querySelector(".cartaicon")
const fecharmodalCarta = document.querySelector(".fecharmodalCarta")
const fecharmodaldascartas = document.querySelector(".fecharmodalCartas")
const tituloCartas = document.querySelector(".titulo")
const textoCartas = document.querySelector(".textoCartas")
const modalEscolhaCarta = document.querySelector(".modalEscolhaCarta")

let modalcarta = false

cartaicon.addEventListener("click", () => {
    if (modalcarta == false) {
        cartasModal.style.display = "flex"
        modalcarta = true
    } else {
        cartasModal.style.display = "none"
        modalcarta = false
    }

})


fecharmodalCarta.addEventListener("click", () => {
    cartasModal.style.display = "none"
    modalcarta = false
})

const cartas = [
    {
        nome: "Amor Primata.",
        preco: 0,
        trofeuNecessario: 0,
        texto: "Acho que estou apaixonado...<br>Hoje conheci alguém que me deixou sem fôlego. Uma garota incrível, linda de um jeito que parece fora do comum. Ela é famosa por aqui, e só de conseguir dizer “oi” para ela, meu coração disparou. Ela não respondeu, mas só o fato de ter falado já fez meu dia brilhar.<br>Passei horas tentando descobrir o que ela gosta. Descobri que ela admira macacos ricos, com presença, e que tenham conseguido superar os Três Caminhos. Os Três Caminhos… são um lugar de lendas, onde macacos vão para morrer... Não de forma literal... bem, vc vai entender. Dizem que ninguém jamais chegou ao fim. Talvez seja por isso que ela ainda esteja sozinha.<br>Não quero me enganar demais, mas sinto que posso ter uma chance. A partir de hoje, começo minha própria jornada. Vou me tornar tudo o que ela procura. Não sou bonito o suficiente, ainda não, mas sei que posso conquistar isso. Cada passo será uma batalha, cada desafio, uma prova. E, no final, talvez eu finalmente consiga estar ao lado dela.",

    },
    {
        nome: "Os Primeiros Passos.",
        preco: 500,
        trofeuNecessario: 0,
        texto: "Hoje iniciei minha jornada para conquistar o coração dela. Nossa… tem sido árduo, e ainda nem cheguei muito longe.<br><br>Tenho pensado seriamente em investir algo na loja, mas meu ouro ainda é insuficiente. Cada moeda economizada é um passo a mais rumo a ela.<br><br>Quando atingir uma boa quantia, pretendo fazer meu pedido, na esperança de que ela veja todo o esforço e me diga “sim”.<br><br>Estou apenas no início, e sei que talvez seja cedo… talvez milhões, bilhões, trilhões… talvez um número tão exorbitante que nem consigo escrever direito, com casas decimais infinitas… Mas que seja. Por ela, eu farei tudo.",

    },


]

let contadorCarta = 0;
for (let carta of cartas) {
    const conteudoCarta = `<h2 class="tituloCarta">${carta.nome}</h2>
    <p class="descricaoCarta"> Preço: ${carta.preco} Trofeus: ${carta.trofeuNecessario}</p>`
    contadorCarta++
    const novaDiv = document.createElement("div")
    novaDiv.classList.add("cartas")
    novaDiv.id = `carta${contadorCarta}`
    novaDiv.innerHTML = conteudoCarta
    modalBody.appendChild(novaDiv)


    novaDiv.addEventListener("click", () => {
    const cashAtual = Number(localStorage.getItem("cash")) || 0;
    const vitoriasAtual = Number(localStorage.getItem("quantidadeDeVitorias")) || 0;

    if(carta.preco <= cashAtual && carta.trofeuNecessario <= vitoriasAtual){
        tituloCartas.innerHTML = carta.nome;
        textoCartas.innerHTML = carta.texto;
        modalEscolhaCarta.style.display = "flex";
    }
});

}

fecharmodaldascartas.addEventListener("click", () => {
    modalEscolhaCarta.style.display = "none"
})


