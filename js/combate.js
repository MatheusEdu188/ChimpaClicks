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
        srcPose: "assets/imgs/Lutas/oponente1pose.png",
        srcDano: "assets/imgs/Lutas/oponente1pose.png",
        ambiente: "assets/imgs/ambiente1.png",
        Id: 1,
        dano: 200,
        quantidadeTrofeus: 1,
        srcSoco: "assets/imgs/Lutas/oponente1ataque.jpg",
        itemRecebido: 1
    },
    {
        nome: "Chico Monkey",
        vida: 50000,
        srcPose: "assets/imgs/Lutas/oponente2pose.png",
        srcDano: "assets/imgs/Lutas/oponente2pose.png",
        ambiente: "assets/imgs/ambiente2.png",
        Id: 2,
        dano: 50000,
        quantidadeTrofeus: 5000,
        srcSoco: "assets/imgs/Lutas/oponente2soco.png",
        itemRecebido: 2,
        itemRequerido: 1
    },
    {
        nome: "",
        vida: 5000000,
        srcPose: "assets/imgs/Lutas/oponente3pose.png",
        srcDano: "assets/imgs/Lutas/oponente3pose.png",
        ambiente: "assets/imgs/ambiente3.png",
        Id: 3,
        dano: 500000,
        quantidadeTrofeus: 5000,
        srcSoco: "assets/imgs/Lutas/oponente3soco.png",
        itemRecebido: 3,
        itemRequerido: 2
    },
    {
        nome: "Chico Monkey",
        vida: 1000000000000,
        srcPose: "assets/imgs/Lutas/oponente4pose.png",
        srcDano: "assets/imgs/Lutas/oponente4pose.png",
        ambiente: "assets/imgs/ambiente4.png",
        Id: 4,
        dano: 1000000000,
        quantidadeTrofeus: 10000,
        srcSoco: "assets/imgs/Lutas/oponente4Soco.png",
        itemRecebido: 4,
        itemRequerido: 3
    }
]

let contagemItemAtual = Number(localStorage.getItem("contagemItemAtual")) || 0;

let id;
let oponenteSelecionado = listadeoponentes[0];
let BarraVidaOponente = oponenteSelecionado.vida;
VidaOponente.innerHTML = BarraVidaOponente;
oponente.src = oponenteSelecionado.srcPose;
document.body.style.backgroundImage = `url("${oponenteSelecionado.ambiente}")`

bottaoEscolhaPersoangens.forEach(botao => {
    botao.addEventListener("click", () => {
        contagemItemAtual = Number(localStorage.getItem("contagemItemAtual"));
        id = botao.dataset.id;
        let escolha = listadeoponentes.find(op => op.Id == id);
        if(contagemItemAtual >= escolha.itemRequerido){
            oponenteSelecionado = escolha
            BarraVidaOponente = oponenteSelecionado.vida;
            VidaOponente.innerHTML = BarraVidaOponente;
            oponente.src = oponenteSelecionado.srcPose;
            document.body.style.backgroundImage = `url("${oponenteSelecionado.ambiente}")`
            
        } else{
            return
        }

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


prota.addEventListener("click", () => {
    somSoco.currentTime = 0;
    somSoco.play();

    if (cooldownPunch) return;

    cooldownPunch = true;

    prota.src = "assets/imgs/Lutas/protaAtq.png";
    oponente.src = oponenteSelecionado.srcDano;
    prota.classList.add("protapunch");
    clearTimeout(punchTimeOut);
    contadorSoco++;

    punchTimeOut = setTimeout(() => {
        prota.src = "assets/imgs/Lutas/protaPose.png";
        prota.classList.remove("protapunch");
        oponente.src = oponenteSelecionado.srcPose;
    }, 500);

    if (contadorSoco >= 3) {
        BarraVidaProta -= oponenteSelecionado.dano;
        somSocoMarugori.play();
        oponente.classList.add("oponenteSoco")

        setTimeout(() => {
            cooldownPunch = false;
            contadorSoco = 0;
            oponente.classList.remove("oponenteSoco");
        }, 1000);

        oponente.src = oponenteSelecionado.srcSoco;
        prota.classList.remove("protapunch");
        prota.src = "assets/imgs/Lutas/protaPose.png";

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
        contagemItemAtual = oponenteSelecionado.itemRecebido
        console.log(contagemItemAtual);
        localStorage.setItem("contagemItemAtual", contagemItemAtual);
        
        
    }

    if (BarraVidaProta <= 0) {
        audioDerrota.play();
        modalDerrota.style.display = "flex";
    }
});



botaoTentarNovamente.addEventListener("click", () => {
    modalDerrota.style.display = "none";
    location.reload();
});

fecharModal.addEventListener("click", () => {
    location.reload();
});
