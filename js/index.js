const monkeybutton = document.querySelector("#monkeyimg")
const monkeycoins = document.querySelector("#monkeycoins")
let quantidadeDeVitorias = Number(localStorage.getItem("quantidadeDeVitorias")) || 0;

let modoespecial1 = false
let modoespecial2 = false
let modoespecial3 = false



let cash = Number(localStorage.getItem("cash")) || 0
monkeycoins.innerHTML = `Monkey Coins: ${cash}`
let contadordeespecial1 = Number(localStorage.getItem("contadordeespecial1")) || 0
let contadordeespecial2 = 0
let imgtimeout = null
let possibilidadeDeCasar = 0





// upgrades


const lojaList = [
    {
        nome: "Empresa",
        img: "assets/imgs/icons/empresaicon.png",
        aura: 100,
        preco: 10000000,
    },
    {
        nome: "Perfume de Aura",
        img: "assets/imgs/icons/perfumeIcon.png",
        aura: 500,
        preco: 50000000,
    },
    {
        nome: "Anabolizante",
        img: "assets/imgs/icons/bomba.png",
        aura: 2500,
        preco: 100000000,
    }
]

let aura = 0;
let quantidadeDano = Number(localStorage.getItem("quantidadeDano")) || 100;

const auras = document.querySelector(".auras")
const trofeus = document.querySelector(".trofeus")

trofeus.innerHTML = `<span class="spanAuraTrofeu">Trofeus:</span>  ${quantidadeDeVitorias}`
auras.innerHTML = `<span class="spanAuraTrofeu">Aura:</span>${aura}`







const modalbodyLoja = document.querySelector(".BodyLoja");
let contadorItem = 0;

for (let item of lojaList) {
    let itemLoja = `<img class="itemLoja" src="${item.img}" alt="">
    <p class="precoLoja">${item.preco}</p>`

    contadorItem++


    const novaDiv = document.createElement("div")
    novaDiv.classList.add("divLojaItem")
    novaDiv.id = `Item${contadorItem}`
    novaDiv.innerHTML = itemLoja
    modalbodyLoja.appendChild(novaDiv)
}


for (let i in lojaList) {
    const upgradeLoja = lojaList[i];
    const elementoLoja = document.getElementById(`Item${parseInt(i) + 1}`);

    if (elementoLoja) {
        elementoLoja.addEventListener("click", () => {

            if (i == 1 && cash >= 50000000) {
                cash -= 50000000
                aura += 500;
                auras.innerHTML = `<span class="spanAuraTrofeu">Aura:</span>${aura}`;
                monkeycoins.innerHTML = `Monkey Coins: ${cash}`;
                localStorage.setItem("cash", cash);

            } else if (i == 0 && cash >= 10000000) {
                cash -= 10000000
                aura += 750
                monkeycoins.innerHTML = `Monkey Coins: ${cash}`;
                localStorage.setItem("cash", cash);

            } else if (i == 2 && cash >= 100000000) {
                cash -= 100000000
                aura += 10000
                quantidadeDano += 200
                BarraVidaProta += 250
                localStorage.setItem("quantidadeDano", quantidadeDano);
                monkeycoins.innerHTML = `Monkey Coins: ${cash}`;
                localStorage.setItem("cash", cash);

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


const upgrades = document.querySelector(".upgrades")


for (let i = 0; i < upgradesList.length; i++) {
    let upgrade = upgradesList[i];
    let itemUpgrade = `
        <p class="tituloupgrade">${upgrade.nome}</p>
        <p>${upgrade.descricao}</p>
        <p id="preco"><span class="cost">Custa:</span> ${upgrade.preco}</p>`;

    const novaDiv = document.createElement("div");
    novaDiv.classList.add("upgrade");
    novaDiv.id = `upgrade${i + 1}`; // define o id!
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
            monkeycoins.innerHTML = `Monkey Coins: ${cash}`

        }, 1000)
    } else if (cash < valorUpgrade) {
        audioClickNegado.play()

    }
}
const funcaoUpgrade1 = function (valorUpgrade, aumento) {
    
    if (cash < 100) {
        monkeybutton.src = "/assets/monkey-removebg-preview.png"

    }
    if (cash >= valorUpgrade) {
        audioClickUpgrade.play()
        contadordeespecial1 += aumento
        cash -= valorUpgrade
        monkeycoins.innerHTML = `Monkey Coins: ${cash}`

    } else if (cash < valorUpgrade) {
        audioClickNegado.play()
        

    }
}

for (let i in upgradesList) {
    const upgrade = upgradesList[i];
    const upgradeElem = document.getElementById(`upgrade${parseInt(i) + 1}`);

    if (upgradeElem) {
        upgradeElem.addEventListener("click", () => {
            if (upgrade.tipo.toLowerCase() === "manual") {
                funcaoUpgrade1(upgrade.preco, upgrade.aumento);
            } else if (upgrade.tipo.toLowerCase() === "automatico") {
                funcaoUpgrade3(upgrade.preco, upgrade.aumento);
            }
        });
    }
}




let intervaloAtivo;






// const upgrade8 = document.getElementById("upgrade8").addEventListener("click", () => {
//     funcaoUpgrade1(1000000, 4000)
// })


// const upgrade7 = document.getElementById("upgrade7").addEventListener("click", () => {
//     funcaoUpgrade1(100000, 1000)
// })



// const upgrade6 = document.getElementById("upgrade6").addEventListener("click", () => {
//     funcaoUpgrade1(10000, 50)
// })

// const upgrade5 = document.getElementById("upgrade5").addEventListener("click", () => {
//     funcaoUpgrade1(400, 10)
// })

// const upgrade4 = document.getElementById("upgrade4").addEventListener("click", () => {
//     funcaoUpgrade3(950, 2)
// })

// const upgrade3 = document.getElementById("upgrade3").addEventListener("click", () => {
//     funcaoUpgrade3(500, 1)
// })


// const upgrade2 = document.getElementById("upgrade2").addEventListener("click", () => {
//     funcaoUpgrade1(150, 4)
// })

// const upgrade1 = document.getElementById("upgrade1").addEventListener("click", () => {
//     funcaoUpgrade1(50, 1)
// })























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





    cash += 1 + contadordeespecial1
    localStorage.setItem("contadordeespecial1", contadordeespecial1);







    // if(upgrade1){
    //     cash+=contadordeespecial

    // }
    // if(upgrade2){
    //     cash+=contadordeespecial
    // }

    monkeycoins.innerHTML = `Monkey Coins: ${cash}`
    if (imgtimeout) {
        clearTimeout(imgtimeout)
    }
    if (cash < 50) {
        monkeybutton.src = "assets/monkey-removebg-preview.png"

        imgtimeout = setTimeout(() => {
            monkeybutton.src = "assets/macaco_triste-removebg-preview.png"
        }, 1000)
    }

    if (cash >= 50000) {
        monkeybutton.src = "assets/Macaco_com_Estilo_e_Confiança-removebg-preview.png"
    }

    if (cash >= 200000) {
        monkeybutton.src = "assets/Macaco Muito Rico.png"
    }

    if (cash >= 100000) {
        monkeybutton.src = "assets/macaco de 100mil.png"
    }
    if (cash >= 500000000) {
        monkeybutton.src = "assets/Macaco Extremamente Rico.png"
    }
    if (cash >= 1000000000) {
        monkeybutton.src = "assets/Macaco 1 bilhão.png"
    }
    if (cash >= 1000000000000000) {
        monkeybutton.src = "assets/macaco infinitamente rico(1).png"

    }
    if (cash >= 10000000000000000) {
        monkeybutton.src = "assets/macaco infinitamente rico(1).png"


    }
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





Upgrade.addEventListener("click", () => {
    modalUpgrade.style.display = "flex"
})

const somDerrota = new Audio("assets/audio/SomDerrota.m4a")
const somVitoria = new Audio("assets/audio/pt1.oga")


pedirCasamento.addEventListener("click", () => {
    modalCasar.style.display = "flex"
    if (cash >= 180000000000000000 && possibilidadeDeCasar >= 100 && quantidadeDeVitorias >= 100000) {
        Resultado.innerHTML = "Ela Aceitou!"
        msgResultado.innerHTML = "Você levará uma vida deprimente a partir de agora. Ela gastará toda sua fortuna e logo logo sua vida se tornará miseravel novamente. Mas oq importa é que agora você tem ela."

    } else {
        Resultado.innerHTML = "Você foi Rejeitado!"
        msgResultado.innerHTML = "Ela te rejeitou e roubou toda sua fortuna"
        cash = 0
        contadordeespecial1 = 0
        contadordeespecial2 = 0
        possibilidadeDeCasar = 0
        quantidadeDeVitorias = 1
        monkeycoins.textContent = cash
        somDerrota.play()


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



finalizarLogin.addEventListener("click", () => {
    modalLogin.style.display = "none"
    let nome1 = valorInput1.value
    let nome2 = valorInput2.value
    if (nome2 == "Gabriel") {
        Name.innerHTML = "Gabiru"
    } else {
        Name.innerHTML = `${nome1}`
    }

})



console.log(quantidadeDeVitorias);








