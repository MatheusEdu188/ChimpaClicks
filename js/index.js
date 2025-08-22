function NumerosEmFormatoDiferente(num) {
    if (num >= 1e27) return (num / 1e27).toFixed(2) + "O"; 
    if (num >= 1e24) return (num / 1e24).toFixed(2) + "S"; 
    if (num >= 1e21) return (num / 1e21).toFixed(2) + "Z"; 
    if (num >= 1e18) return (num / 1e18).toFixed(2) + "Q"; 
    if (num >= 1e15) return (num / 1e15).toFixed(2) + "T"; 
    if (num >= 1e12) return (num / 1e12).toFixed(2) + "B";
    if (num >= 1e9)  return (num / 1e9).toFixed(2)  + "B";  
    if (num >= 1e6)  return (num / 1e6).toFixed(2)  + "M"; 
    if (num >= 1e3)  return (num / 1e3).toFixed(2)  + "K"; 
    return num;
}


const monkeybutton = document.querySelector("#monkeyimg")
const monkeycoins = document.querySelector("#monkeycoins")
let quantidadeDeVitorias = Number(localStorage.getItem("quantidadeDeVitorias")) || 0;



let modoespecial1 = false
let modoespecial2 = false
let modoespecial3 = false

let BarraVidaProta = Number(localStorage.getItem("BarraVidaProta")) || 100;



let cash = Number(localStorage.getItem("cash")) || 0;
monkeycoins.innerHTML = `Monkey Coins: ${cash}`
let contadordeespecial1 = Number(localStorage.getItem("contadordeespecial1")) || 0

let contadordeespecial2 = 0
let imgtimeout = null
let possibilidadeDeCasar = 0



function salvarLocalStorage() {
    localStorage.setItem("cash", cash);
    localStorage.setItem("aura", aura);
    localStorage.setItem("contadordeespecial1", contadordeespecial1)
    localStorage.setItem("contadordeespecial2", contadordeespecial2)
    auras.innerHTML = `<span class="spanAuraTrofeu">Aura:</span>${NumerosEmFormatoDiferente(aura)}`;
    monkeycoins.innerHTML = `Monkey Coins: ${NumerosEmFormatoDiferente(cash)}`;
    trofeus.innerHTML = `<span class="spanAuraTrofeu">Trofeus:</span>  ${NumerosEmFormatoDiferente(quantidadeDeVitorias)}`
    localStorage.setItem("monkeybutton", monkeybutton.src)

    
    localStorage.setItem("quantidadeDano", quantidadeDano);
    localStorage.setItem("quantidadeDeVitorias", quantidadeDeVitorias);
    localStorage.setItem("BarraVidaProta", BarraVidaProta);


}




// upgrades


const lojaList = [
    {
        nome: "Empresa",
        img: "assets/imgs/icons/empresaicon.png",
        ganhoCash: 0,
        ganhoForça: 0,
        ganhoAura: 750,
        preco: 10000000,
        ganhoVida: 0,
        tipo: "upgrade",
        descricao:"+750 de Aura"
    },
    {
        nome: "Perfume de Aura",
        img: "assets/imgs/icons/perfumeIcon.png",
        ganhoAura: 1000,
        ganhoCash: 0,
        ganhoForça: 0,
        ganhoVida: 0,
        preco: 50000000,
        tipo: "upgrade",
        descricao: "+1000 de Aura"
    },
    {
        nome: "Anabolizante",
        img: "assets/imgs/icons/bomba.png",
        aura: 2500,
        ganhoAura: 500,
        ganhoCash: 0,
        ganhoForça: 1000,
        ganhoVida: 500,
        preco: 100000000,
        
        tipo: "upgrade",
        descricao:"+1000 de Força & 500 Aura"
    },
    {
        nome: "Super Soldado",
        img: "assets/imgs/icons/soroSuperSoldado.png",
        aura: 2500,
        ganhoAura: 1500,
        ganhoCash: 0,
        ganhoForça: 25000,
        ganhoVida: 1800,
        preco: 100000000000000000,
        tipo: "upgrade",
        descricao:"+25K de Força & 1500 Aura"
    },
    {
        nome: "Mega Soldado",
        img: "assets/imgs/icons/frascodeanabolizante.png",
        aura: 5000,
        ganhoAura: 3000,
        ganhoCash: 0,
        ganhoForça: 100000,
        ganhoVida: 50000,
        preco: 10000000000000000000000,
        tipo: "upgrade",
        descricao:"+25K de Força & 1500 Aura" 
    },
    {
        nome: "Skin Mega Forte",
        img: "assets/imgs/skins/Macaco_Musculoso_em_Poses_Confiante-removebg-preview.png",
        aura: 1000,
        tipo: "skin",
        ganhoCash: 1,
        ganhoForça: 2,
        ganhoAura: 1.5,
        preco: 10000000000,
        descricao: "2X Força "
    },
    {
        nome: "Skin Brurma",
        img: "assets/imgs/skins/bulma.png",
        aura: 0,
        tipo: "skin",
        descricao: "2X Cash",
        ganhoCash: 2,
        ganhoForça: 1,
        ganhoAura: 1,
        preco: 500000000000,
    }
]



let aura = Number(localStorage.getItem("aura")) || 0;
let quantidadeDano = Number(localStorage.getItem("quantidadeDano")) || 100;

const auras = document.querySelector(".auras")
const trofeus = document.querySelector(".trofeus")

trofeus.innerHTML = `<span class="spanAuraTrofeu">Trofeus:</span>  ${NumerosEmFormatoDiferente(quantidadeDeVitorias)}`
auras.innerHTML = `<span class="spanAuraTrofeu">Aura:</span>${NumerosEmFormatoDiferente(aura)}`




let upgradeForça = Number(localStorage.getItem("upgradeForça")) || 1;
let upgradeCash = Number(localStorage.getItem("upgradeCash")) || 1;
let upgradeAura = Number(localStorage.getItem("upgradeAura")) || 1;





let srcSkinSave = localStorage.getItem("monkeybutton");
if (srcSkinSave) {
    monkeybutton.src = srcSkinSave;
}

localStorage.setItem("monkeybutton", monkeybutton.src);





const modalbodyLoja = document.querySelector(".BodyLoja");
let contadorItem = 0;

for (let item of lojaList) {
    let itemLoja = `<img class="itemLoja" src="${item.img}" alt="">
    <p class="precoLoja">${NumerosEmFormatoDiferente(item.preco)}</p>
    <h2 class="descricaoItem">${item.descricao}</h2>`

    contadorItem++


    const novaDiv = document.createElement("div")
    novaDiv.classList.add("divLojaItem")
    novaDiv.id = `Item${contadorItem}`
    novaDiv.innerHTML = itemLoja
    modalbodyLoja.appendChild(novaDiv)
}





function upgradeSkin(ganhoForça, ganhoAura, ganhoCash, valorLoja, img) {
    if (cash >= valorLoja) {
        upgradeForça = ganhoForça
        upgradeCash = ganhoCash
        cash -= valorLoja;
        aura += ganhoAura
         
        

        monkeybutton.src = img;
        localStorage.setItem("monkeybutton", img);
        salvarLocalStorage();

    } else {
        audioClickNegado.play()


    }
}

function upgradeUp(ganhoForça, ganhoAura, ganhoCash, valorLoja, ganhoVida) {
    if (cash >= valorLoja) {
        
        upgradeCash += ganhoCash
        quantidadeDano += ganhoForça
        cash -= valorLoja
        aura += ganhoAura
        BarraVidaProta += ganhoVida
        console.log(BarraVidaProta);
        
        salvarLocalStorage()
    } else {
        audioClickNegado.play()


    }
}









for (let i = 0; i < lojaList.length; i++) {
    const item = lojaList[i];
    const LojaElem = document.getElementById(`Item${parseInt(i) + 1}`);
    if (item) {
        LojaElem.addEventListener("click", (event) => {
            event.stopPropagation();



            if (item.tipo.toLowerCase() === "upgrade") {

                upgradeUp(item.ganhoForça, item.ganhoAura, item.ganhoCash, item.preco, item.ganhoVida);
                console.log(aura);
                console.log(quantidadeDano);
                
                

            } else if (item.tipo.toLowerCase() === "skin") {

                upgradeSkin(item.ganhoForça, item.ganhoAura, item.ganhoCash, item.preco, item.img);
            }

        });
    }
}














const upgradesList = [
    {
        nome: "+1 Por Click",
        descricao: "Adiciona mais 1 coin por click",
        preco: 50,
        aumento: 1,
        tipo: "manual",
    },
    {
        nome: "+4 Por Click",
        descricao: "Adiciona mais 4 coins por click",
        preco: 150,
        aumento: 4,
        tipo: "manual",
    },
    {
        nome: "1 Por Segundo",
        descricao: "Adiciona 1 coin a cada segundo",
        preco: 500,
        aumento: 1,
        tipo: "automatico",
    },
    {
        nome: "2 Por Segundo",
        descricao: "Adicionar 2 coins por segundo",
        preco: 950,
        aumento: 2,
        tipo: "automatico",
    },

    {
        nome: "10 por Clik",
        descricao: "Adicionar 10 coins por Click",
        preco: 400,
        aumento: 10,
        tipo: "manual",
    },

    {
        nome: "200 por Click",
        descricao: "Adicionar 200 coins por Click",
        preco: 10000,
        aumento: 200,
        tipo: "manual",
    },

    {
        nome: "Dedo turboalimentado.",
        descricao: "Adicionar 1000 coins por Click",
        preco: 100000,
        aumento: 1000,
        tipo: "manual",
    },
    {
        nome: "Macaco super rico.",
        descricao: "Adicionar 4000 coins por Click",
        preco: 1000000,
        aumento: 4000,
        tipo: "manual",
    },
    {
        nome: "Toque de ouro. super rico.",
        descricao: "Adicionar 10000 coins por Click",
        preco: 10000000,
        aumento: 10000,
        tipo: "manual",
    },
    {
        nome: "Clique bilionário.",
        descricao: "Adicionar 1000000000 coins por Click",
        preco: 50000000,
        aumento: 1000000000,
        tipo: "manual",
    },
    {
        nome: "Clique galáctico.",
        descricao: "Adicionar 100.000.000 coins por Click",
        preco: 1000000000,
        aumento: 100000000,
        tipo: "manual",
    },
    {
        nome: "Clique Supremo.",
        descricao: "Adicionar 100.000.000.000 coins por Click",
        preco: 1000000000000,
        aumento: 100000000000,
        tipo: "manual",
    },
    {
        nome: "Clique Bolado.",
        descricao: "Adicionar 100.000.000.000.000 coins por Click",
        preco: 10000000000000000000,
        aumento: 100000000000000,
        tipo: "manual",
    },
    {
        nome: "Clique Roubado.",
        descricao: "Adicionar 100.000.000.000.000.000 coins por Click",
        preco: 100000000000000000000000,
        aumento: 10000000000000000000,
        tipo: "manual",
    },
    {
        nome: "O Clique.",
        descricao: "Adicionar 90.000.000.000.000.000.000 coins por Click",
        preco: 1000000000000000000000000,
        aumento: 90000000000000000000,
        tipo: "manual",
    },
    {
        nome: "+10/s",
        descricao: "Macaco empreendedor.",
        preco: 5000,
        aumento: 10,
        tipo: "automatico",
    },
    {
        nome: "+100/s",
        descricao: "Fábrica de bananas.",
        preco: 50000,
        aumento: 100,
        tipo: "automatico",
    },
    {
        nome: "+1000/s",
        descricao: "Império de bananas.",
        preco: 500000,
        aumento: 1000,
        tipo: "automatico",
    },
    {
        nome: "+10000/s",
        descricao: "Cidade do macaco.",
        preco: 5000000,
        aumento: 10000,
        tipo: "automatico",
    },
    {
        nome: "+100000/s",
        descricao: "Planeta das bananas.",
        preco: 50000000,
        aumento: 100000,
        tipo: "automatico",
    },
    {
        nome: "+1000000/s",
        descricao: "Economia global do macaco.",
        preco: 500000000,
        aumento: 1000000,
        tipo: "automatico",
    },
    {
        nome: "+1000000000/s",
        descricao: "Universo de macacos.",
        preco: 10000000000,
        aumento: 1000000000,
        tipo: "automatico",
    }
]


const audioClickUpgrade = new Audio("assets/audio/click upgrade.m4a")
const audioClickNegado = new Audio("assets/audio/ClickNegado.m4a")
let precos = document.querySelector("preco")


const upgrades = document.querySelector(".upgrades")


for (let i = 0; i < upgradesList.length; i++) {
    let upgrade = upgradesList[i];
    let itemUpgrade = `
    <p class="tituloupgrade">${upgrade.nome}</p>
    <p class="descricaoUpgrade">${upgrade.descricao}</p>
    <p class="preco"><span class="cost">Custa:</span></p>`;

    const novaDiv = document.createElement("div");
    novaDiv.classList.add("upgrade");
    novaDiv.id = `upgrade${i + 1}`; 
    novaDiv.innerHTML = itemUpgrade;
    upgrades.appendChild(novaDiv);
}













// botões de upgrade individual

const funcaoUpgrade3 = function (valorUpgrade, qtd) {

    if (cash >= valorUpgrade) {
        audioClickUpgrade.play()
        cash -= valorUpgrade
        intervaloAtivo = setInterval(() => {
            cash += qtd
            monkeycoins.innerHTML = `Monkey Coins: ${NumerosEmFormatoDiferente(cash)}`

        }, 1000)
    } else if (cash < valorUpgrade) {
        audioClickNegado.play()

    }
}
const funcaoUpgrade1 = function (valorUpgrade, aumento) {


    if (cash >= valorUpgrade) {
        audioClickUpgrade.play();
        contadordeespecial1 += aumento;
        cash -= valorUpgrade;
        monkeycoins.innerHTML = `Monkey Coins: ${NumerosEmFormatoDiferente(cash)}`;



    } else {
        audioClickNegado.play()


    }
}

for (let i = 0; i < upgradesList.length; i++) {
    const upgrade = upgradesList[i];
    const upgradeElem = document.getElementById(`upgrade${i + 1}`);

    
    let precoSalvo = Number(localStorage.getItem(`upgradePreco${i}`)) || upgrade.preco;
    upgrade.preco = precoSalvo;

    if (upgradeElem) {
        const precoElem = upgradeElem.querySelector(".preco");
        precoElem.innerHTML = `<span class="cost">Custa:</span>${NumerosEmFormatoDiferente(upgrade.preco)}`;

        upgradeElem.addEventListener("click", () => {

            if (cash < upgrade.preco) {
                audioClickNegado.play();
                return;
            }

            if (upgrade.tipo.toLowerCase() === "manual") {
                funcaoUpgrade1(upgrade.preco, upgrade.aumento);
            } else if (upgrade.tipo.toLowerCase() === "automatico") {
                funcaoUpgrade3(upgrade.preco, upgrade.aumento);
            }

            upgrade.preco *= 1.5;


            localStorage.setItem(`upgradePreco${i}`, upgrade.preco);


            precoElem.innerHTML = `<span class="cost">Custa:</span> ${NumerosEmFormatoDiferente(upgrade.preco)}`;
        });
    }
}





let intervaloAtivo;







const skins = [
    {
        nome: "Macaco Simples",
        img: "assets/monkey-removebg-preview.png",
        cashNecessario: 50
    },
    {
        nome: "Macaco Estiloso",
        img: "assets/Macaco_com_Estilo_e_Confiança-removebg-preview.png",
        cashNecessario: 10000
    },
    {
        nome: "Macaco Muito Rico",
        img: "assets/Macaco Muito Rico.png",
        cashNecessario: 50000
    },
    {
        nome: "Macaco 100Mil",
        img: "assets/macaco de 100mil.png",
        cashNecessario: 100000
    },
    {
        nome: "Macaco Extremamente Rico",
        img: "assets/Macaco Extremamente Rico.png",
        cashNecessario: 100000000
    },
    {
        nome: "O Homem de 1 Bilhão",
        img: "assets/Macaco 1 bilhão.png",
        cashNecessario: 1000000000
    },
    {
        nome: "Macaco Infinitamente Rico",
        img: "assets/macaco infinitamente rico(1).png",
        cashNecessario: 100000000000000
    },
    {
        nome: "Macaco Interuniversal",
        img: "assets/Macaco Interuniversal.png",
        cashNecessario: 1000000000000000000
    },
    {
        nome: "Macaco Guerreiro que Transcendo o Universo",
        img: "assets/macaco guerreiro que transcende o universo.png",
        cashNecessario: 10000000000000000000
    },
    {
        nome: "Está Transcendendo",
        img: "assets/está transcendendo.png",
        cashNecessario: 10000000000000000000000000
    },
    {
        nome: "Ele Transcendeu",
        img: "assets/eletranscendeu.png",
        cashNecessario: 1000000000000000000000000000
    },
]



const modalBody = document.querySelector(".skinItem");
let contadorItemSkin = 0;

for (let item of skins) {
    contadorItemSkin++;

    let itemSkin = `
        <img class="imgSkin" src="${item.img}" alt="">
        <p class="precoLoja">${NumerosEmFormatoDiferente(item.cashNecessario)}</p>
        
    `;

    const novaDiv = document.createElement("div");
    novaDiv.classList.add("itensSkin");
    novaDiv.id = `Item${contadorItem}`;
    novaDiv.innerHTML = itemSkin;
    modalBody.appendChild(novaDiv);

    
    novaDiv.addEventListener("click", () => {
        if (cash >= item.cashNecessario) {
            monkeybutton.src = item.img;
            localStorage.setItem("monkeybutton", item.img); 
        } else {
            audioClickNegado.play(); 
        }
    });
}























// evento de click








monkeybutton.addEventListener("click", () => {
    possibilidadeDeCasar += 0.00000001
    console.log(possibilidadeDeCasar);

    if (cash >= 10000000) {
        possibilidadeDeCasar += 0.0000005
    }
    if (cash >= 2000000000) {
        possibilidadeDeCasar += 0.0000010
    }
    monkeycoins.innerHTML = `Monkey Coins: ${NumerosEmFormatoDiferente(cash)}`





    cash += 1 + (contadordeespecial1 * upgradeCash)
    localStorage.setItem("contadordeespecial1", contadordeespecial1);



    localStorage.setItem("cash", cash)
})




// shop do jogo


const Upgrade = document.querySelector("#Upgrade")
const modalUpgrade = document.querySelector(".modalUpgrade")
const modalloja = document.querySelector(".modalloja")
const loja = document.getElementById("carrinho")
const pedirCasamento = document.querySelector(".pedirCasamento")
const modalCasar = document.getElementById("modalCasar")
const fecharmodalCasar = document.querySelector(".fecharmodalCasar")
const Resultado = document.getElementById("Resultado")
const msgResultado = document.getElementById("msgResultado")
const modalSkin = document.getElementById("modalSkin")
const SkinDiv = document.querySelector(".SkinDiv")
const fecharmodalSkin = document.querySelector(".fecharmodalSkin")




let modalLoja = false;
Upgrade.addEventListener("click", () => {
    if (modalLoja == false) {
        modalUpgrade.style.display = "flex"
        modalLoja = true
    } else if (modalLoja == true) {
        modalUpgrade.style.display = "none"
        modalLoja = false

    }
})


let modalSkin1 = false;

SkinDiv.addEventListener("click", () => {
    if (modalSkin1 == false) {
        modalSkin.style.display = "flex"
        modalSkin1 = true
    } else if (modalSkin1 == true) {
        modalSkin.style.display = "none"
        modalSkin1 = false

    }
})

fecharmodalSkin.addEventListener("click", () => {
    modalSkin.style.display = "none"
    modalSkin1 = false
})




const somDerrota = new Audio("assets/audio/SomDerrota.m4a")
const somVitoria = new Audio("assets/audio/pt1.oga")


pedirCasamento.addEventListener("click", () => {
    modalCasar.style.display = "flex"
    if (cash >= 180000000000000000 && possibilidadeDeCasar >= 100 && quantidadeDeVitorias >= 100000 && aura >= 50000) {
        Resultado.innerHTML = "Ela Aceitou!"
        msgResultado.innerHTML = "Você levará uma vida deprimente a partir de agora. Ela gastará toda sua fortuna e logo logo sua vida se tornará miseravel novamente. Mas oq importa é que agora você tem ela. De qualquer forma... Parabéns!! Seu Objetivo foi concluido."

    } else {
        Resultado.innerHTML = "Você foi Rejeitado!"
        msgResultado.innerHTML = "Ela te rejeitou e roubou toda sua fortuna"
        cash = 0
        contadordeespecial1 = 0
        aura = 0
        possibilidadeDeCasar = 0
        quantidadeDeVitorias = 1
        monkeycoins.textContent = cash
        trofeus.textContent = `<h2 class="trofeu"></h2>`
        auras.textContent = `<h2 class="aura">h2>`
        somDerrota.play()
        salvarLocalStorage()


    }

})

fecharmodalCasar.addEventListener("click", () => {
    modalCasar.style.display = "none"
})


const fecharmodal = document.getElementById("fecharmodalDiv")
const fecharmodalLoja = document.querySelector(".fecharmodalLoja")
const fecharmodalLogin = document.querySelector("#fecharmodalLogin")
const modallogin = document.querySelector(".modallogin")

fecharmodalLogin.addEventListener("click", () => {
    modallogin.style.display = "none"
})


fecharmodal.addEventListener("click", () => {
    modalUpgrade.style.display = "none"
    modalLoja = false
})

fecharmodalLoja.addEventListener("click", () => {
    modalloja.style.display = "none"
})


loja.addEventListener("click", () => {
    modalloja.style.display = "flex"
})



// Coletar Nome



let Name = document.querySelector(".NameMonkey")
let valorInput1 = document.querySelector(".inputLogin")
let valorInput2 = document.querySelector(".InputNomeVerdadeiro")
const finalizarLogin = document.querySelector(".botaoLogin")
const modalLogin = document.querySelector(".modallogin")












let jaColocouNome = localStorage.getItem("jacolocounome");

finalizarLogin.addEventListener("click", () => {

    jaColocouNome = true
    localStorage.setItem("jacolocounome", jaColocouNome);


    modalLogin.style.display = "none"
    localStorage.setItem("nome1", valorInput1.value);
    localStorage.setItem("nome2", valorInput2.value);


    let nome1 = localStorage.getItem("nome1");
    let nome2 = localStorage.getItem("nome2");

    if (nome2 == "Gabriel") {
        Name.innerHTML = "Gabiru"

    } else {
        Name.innerHTML = `${nome1}`
    }

})

if (jaColocouNome == "true") {
    modalLogin.style.display = "none"
    let nome1 = localStorage.getItem("nome1");
    let nome2 = localStorage.getItem("nome2");

    if (nome2 === "Gabriel") {
        Name.innerHTML = "Gabiru";
    } else {
        Name.innerHTML = nome1;
    }
}



console.log(quantidadeDeVitorias);








