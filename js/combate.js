const prota = document.querySelector(".prota")
const oponente = document.querySelector(".oponente")


let upgradeForça = Number(localStorage.getItem("upgradeForça")) || 1;
let upgradeCash = Number(localStorage.getItem("upgradeCash")) || 1;
let upgradeAura = Number(localStorage.getItem("upgradeAura")) || 1;

let quantidadeDeVitorias = Number(localStorage.getItem("quantidadeDeVitorias")) || 0;
const vitorias = document.getElementById("win")
vitorias.textContent = quantidadeDeVitorias 

const VidaProta = document.querySelector("#VidaProta")
const VidaOponente = document.querySelector("#VidaOponente")

const bottaoEscolhaPersoangens = [...document.querySelectorAll(".bottaoEscolhaP")]


let BarraVidaProta = Number(localStorage.getItem("BarraVidaProta")) || 100;
VidaProta.innerHTML = BarraVidaProta




let punchTimeOut;
let cooldownPunch = false;

const listadeoponentes = [
    {
        nome: "Marugori",
        vida: 1000,
        srcPose: "assets/imgs/Lutas/Macaco forte em pose de luta.png",
        srcDano: "assets/imgs/Lutas/macaco forte levando soco.png",
        Id: 1,
        dano: 200,
        quantidadeTrofeus: 1,
        srcSoco: "assets/imgs/Lutas/Macaco Forte Dando Soco.png"
    },
    {
        nome: "Chico Monkey",
        vida: 50000,
        srcPose: "assets/imgs/Lutas/chico...Quer dizer...Macaco em pode de luta.png",
        srcDano: "assets/imgs/Lutas/chico...Quer dizer...Macaco em pode de luta.png",
        Id: 2,
        dano: 50000,
        quantidadeTrofeus: 500,
        srcSoco: "assets/imgs/Lutas/chico monkey dando soco (2).png"
    },
    {
        nome: "Chico Monkey",
        vida: 5000000,
        srcPose: "assets/imgs/Lutas/chico...Quer dizer...Macaco em pode de luta.png",
        srcDano: "assets/imgs/Lutas/chico...Quer dizer...Macaco em pode de luta.png",
        Id: 2,
        dano: 500000,
        quantidadeTrofeus: 5000,
        srcSoco: "assets/imgs/Lutas/chico monkey dando soco (2).png"
    },
    {
        nome: "Chico Monkey",
        vida: 1000000000000,
        srcPose: "assets/imgs/Lutas/chico...Quer dizer...Macaco em pode de luta.png",
        srcDano: "assets/imgs/Lutas/chico...Quer dizer...Macaco em pode de luta.png",
        Id: 2,
        dano: 1000000000,
        quantidadeTrofeus: 10000,
        srcSoco: "assets/imgs/Lutas/chico monkey dando soco (2).png"
    }
]

let id;
let oponenteSelecionado = listadeoponentes[0];
let BarraVidaOponente = oponenteSelecionado.vida;
VidaOponente.innerHTML = BarraVidaOponente;
oponente.src = oponenteSelecionado.srcPose;

bottaoEscolhaPersoangens.forEach(botao => {
    botao.addEventListener("click", () => {
        id = botao.dataset.id;
        oponenteSelecionado = listadeoponentes.find(op => op.Id == id);
        BarraVidaOponente = oponenteSelecionado.vida;
        VidaOponente.innerHTML = BarraVidaOponente;
        oponente.src = oponenteSelecionado.srcPose;
    });
});

let contadorSoco = 0;

let quantidadeDano = Number(localStorage.getItem("quantidadeDano")) || 100;

const somSoco = new Audio("assets/audio/som de soco.m4a")
const somSocoMarugori = new Audio("assets/audio/som soco marugori.m4a")
const modalDerrota = document.getElementById("modalDerrota");
const fecharModalDerrota = document.getElementById("fecharModalDerrota");
const botaoTentarNovamente = document.getElementById("botaoTentarNovamente");
const audioDerrota = new Audio("assets/audio/SomDerrota.m4a");
const modalVitoria = document.getElementById("modalVitoria");
const fecharModal = document.getElementById("fecharModal");

prota.addEventListener("click", () => {
    somSoco.currentTime = 0;
    somSoco.play();

    if (cooldownPunch) return;

    cooldownPunch = true;

    prota.src = "assets/imgs/Lutas/punchMonkey1.png";
    oponente.src = oponenteSelecionado.srcDano;
    prota.classList.add("protapunch");
    clearTimeout(punchTimeOut);
    contadorSoco++;

    punchTimeOut = setTimeout(() => {
        prota.src = "assets/imgs/Lutas/MonkeyPoseFight.png";
        prota.classList.remove("protapunch");
        oponente.src = oponenteSelecionado.srcPose;
    }, 500);

    if (contadorSoco >= 3) {
        BarraVidaProta -= oponenteSelecionado.dano;
        somSocoMarugori.play();

        setTimeout(() => {
            cooldownPunch = false;
            contadorSoco = 0;
            oponente.classList.remove("oponenteSoco");
        }, 500);

        oponente.src = oponenteSelecionado.srcSoco;
        prota.classList.remove("protapunch");
        prota.src = "assets/imgs/Lutas/prota levando um soco.png";

        oponente.classList.add("oponenteSoco");
        VidaProta.innerHTML = BarraVidaProta;
    } else {
        cooldownPunch = false;
    }

    BarraVidaOponente -= (quantidadeDano * upgradeForça);
    VidaOponente.innerHTML = BarraVidaOponente;

    if (BarraVidaOponente <= 0) {
        modalVitoria.style.display = "block";
        quantidadeDeVitorias += oponenteSelecionado.quantidadeTrofeus;
        vitorias.innerHTML = `${quantidadeDeVitorias}`;
        localStorage.setItem("quantidadeDeVitorias", quantidadeDeVitorias);
    }

    if (BarraVidaProta <= 0) {
        audioDerrota.play();
        modalDerrota.style.display = "flex";
    }
});

fecharModalDerrota.addEventListener("click", () => {
    modalDerrota.style.display = "none";
});

botaoTentarNovamente.addEventListener("click", () => {
    modalDerrota.style.display = "none";
    location.reload();
});

fecharModal.addEventListener("click", () => {
    location.reload();
});
