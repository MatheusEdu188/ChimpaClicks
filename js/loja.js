
// const lojaList = [
//     {
//         nome: "Empresa",
//         img: "assets/imgs/icons/empresaicon.png",
//         ganhoCash: 0,
//         ganhoForça: 0,
//         ganhoAura: 750,
//         preco: 10000000,
//         tipo: "upgrade",
//         descricao:"+750 de Aura"
//     },
//     {
//         nome: "Perfume de Aura",
//         img: "assets/imgs/icons/perfumeIcon.png",
//         ganhoAura: 1000,
//         ganhoCash: 0,
//         ganhoForça: 0,
//         preco: 50000000,
//         tipo: "upgrade",
//         descricao: "+1000 de Aura"
//     },
//     {
//         nome: "Anabolizante",
//         img: "assets/imgs/icons/bomba.png",
//         aura: 2500,
//         ganhoAura: 500,
//         ganhoCash: 0,
//         ganhoForça: 1000,
//         preco: 100000000,
//         tipo: "upgrade",
//         descricao:"+1000 de Força & 500 Aura"
//     },
//     {
//         nome: "Skin Mega Forte",
//         img: "assets/imgs/skins/Macaco_Musculoso_em_Poses_Confiante-removebg-preview.png",
//         aura: 1000,
//         tipo: "skin",
//         ganhoCash: 1,
//         ganhoForça: 2,
//         ganhoAura: 1.5,
//         preco: 10000000000,
//         descricao: "2X Força "
//     },
//     {
//         nome: "Skin Brurma",
//         img: "assets/imgs/skins/bulma.png",
//         aura: 0,
//         tipo: "skin",
//         descricao: "2X Cash",
//         ganhoCash: 2,
//         ganhoForça: 1,
//         ganhoAura: 1,
//         preco: 500000000000,
//     }
// ]



// let aura = Number(localStorage.getItem("aura")) || 0;
// let quantidadeDano = Number(localStorage.getItem("quantidadeDano")) || 100;

// const auras = document.querySelector(".auras")
// const trofeus = document.querySelector(".trofeus")

// trofeus.innerHTML = `<span class="spanAuraTrofeu">Trofeus:</span>  ${NumerosEmFormatoDiferente(quantidadeDeVitorias)}`
// auras.innerHTML = `<span class="spanAuraTrofeu">Aura:</span>${NumerosEmFormatoDiferente(aura)}`




// let upgradeForça = Number(localStorage.getItem("upgradeForça")) || 1;
// let upgradeCash = Number(localStorage.getItem("upgradeCash")) || 1;
// let upgradeAura = Number(localStorage.getItem("upgradeAura")) || 1;





// let srcSkinSave = localStorage.getItem("monkeybutton");
// if (srcSkinSave) {
//     monkeybutton.src = srcSkinSave;
// }

// localStorage.setItem("monkeybutton", monkeybutton.src);





// const modalbodyLoja = document.querySelector(".BodyLoja");
// let contadorItem = 0;

// for (let item of lojaList) {
//     let itemLoja = `<img class="itemLoja" src="${item.img}" alt="">
//     <p class="precoLoja">${NumerosEmFormatoDiferente(item.preco)}</p>
//     <h2 class="descricaoItem">${item.descricao}</h2>`

//     contadorItem++


//     const novaDiv = document.createElement("div")
//     novaDiv.classList.add("divLojaItem")
//     novaDiv.id = `Item${contadorItem}`
//     novaDiv.innerHTML = itemLoja
//     modalbodyLoja.appendChild(novaDiv)
// }





// function upgradeSkin(ganhoForça, ganhoAura, ganhoCash, valorLoja, img) {
//     if (cash >= valorLoja) {
//         upgradeForça = ganhoForça
//         upgradeCash = ganhoCash
//         cash -= valorLoja;
//         aura += ganhoAura
        

//         monkeybutton.src = img;
//         localStorage.setItem("monkeybutton", img);
//         salvarLocalStorage();

//     } else {
//         audioClickNegado.play()


//     }
// }

// function upgradeUp(ganhoForça, ganhoAura, ganhoCash, valorLoja) {
//     if (cash >= valorLoja) {
        
//         upgradeCash += ganhoCash
//         quantidadeDano += ganhoForça
//         cash -= valorLoja
//         aura += ganhoAura
//         salvarLocalStorage()
//     } else {
//         audioClickNegado.play()


//     }
// }






// for (let i = 0; i < lojaList.length; i++) {
//     const item = lojaList[i];
//     const LojaElem = document.getElementById(`Item${parseInt(i) + 1}`);

//     if (item) {
//         LojaElem.addEventListener("click", () => {



//             if (item.tipo.toLowerCase() === "upgrade") {

//                 upgradeUp(item.ganhoForça, item.ganhoAura, item.ganhoCash, item.preco);
//                 console.log(aura);
//                 console.log(quantidadeDano);
                
                

//             } else if (item.tipo.toLowerCase() === "skin") {

//                 upgradeSkin(item.ganhoForça, item.ganhoAura, item.ganhoCash, item.preco, item.img);
//             }

//         });
//     }
// }
