// let cash = Number(localStorage.getItem("cash")) || 0
// monkeycoins.innerHTML = `Monkey Coins: ${cash}`
// let contadordeespecial1 = Number(localStorage.getItem("contadordeespecial1")) || 0
// let contadordeespecial2 = 0
// let imgtimeout = null
// let possibilidadeDeCasar = 0
// let BarraVidaProta = Number(localStorage.getItem("BarraVidaProta")) || 10;





// // upgrades


// const lojaList = [
//     {
//         nome: "Empresa",
//         img: "assets/imgs/icons/empresaicon.png",
//         aura: 100,
//         preco: 10000000,
//     },
//     {
//         nome: "Perfume de Aura",
//         img: "assets/imgs/icons/perfumeIcon.png",
//         aura: 500,
//         preco: 50000000,
//     },
//     {
//         nome: "Anabolizante",
//         img: "assets/imgs/icons/bomba.png",
//         aura: 2500,
//         preco: 100000000,
//     },
//     {
//         nome: "Skin Mega Forte",
//         img: "assets/Macaco_Musculoso_em_Poses_Confiante-removebg-preview.png",
//         aura: 1000,
//         preco: 1200000000,
//     }
// ]

// let aura = 0;
// let quantidadeDano = Number(localStorage.getItem("quantidadeDano")) || 100;

// const auras = document.querySelector(".auras")
// const trofeus = document.querySelector(".trofeus")

// trofeus.innerHTML = `<span class="spanAuraTrofeu">Trofeus:</span>  ${quantidadeDeVitorias}`
// auras.innerHTML = `<span class="spanAuraTrofeu">Aura:</span>${aura}`







// const modalbodyLoja = document.querySelector(".BodyLoja");
// let contadorItem = 0;

// for (let item of lojaList) {
//     let itemLoja = `<img class="itemLoja" src="${item.img}" alt="">
//     <p class="precoLoja">${item.preco}</p>`

//     contadorItem++


//     const novaDiv = document.createElement("div")
//     novaDiv.classList.add("divLojaItem")
//     novaDiv.id = `Item${contadorItem}`
//     novaDiv.innerHTML = itemLoja
//     modalbodyLoja.appendChild(novaDiv)
// }


// for (let i in lojaList) {
//     const upgradeLoja = lojaList[i];
//     const elementoLoja = document.getElementById(`Item${parseInt(i) + 1}`);

//     if (elementoLoja) {
//         elementoLoja.addEventListener("click", () => {

//             if (i == 1 && cash >= 50000000) {
//                 cash -= 50000000
//                 aura += 500;
//                 auras.innerHTML = `<span class="spanAuraTrofeu">Aura:</span>${aura}`;
//                 monkeycoins.innerHTML = `Monkey Coins: ${cash}`;
//                 localStorage.setItem("cash", cash);
//                 localStorage.setItem("aura", aura);

//             } else if (i == 0 && cash >= 10000000) {
//                 cash -= 10000000
//                 aura += 750
//                 monkeycoins.innerHTML = `Monkey Coins: ${cash}`;
//                 localStorage.setItem("cash", cash);
//                 localStorage.setItem("aura", aura);
//                 auras.innerHTML = `<span class="spanAuraTrofeu">Aura:</span>${aura}`;

//             } else if (i == 2 && cash >= 100000000) {
//                 cash -= 100000000
//                 aura += 10000
//                 quantidadeDano += 200
//                 BarraVidaProta += 250
//                 localStorage.setItem("quantidadeDano", quantidadeDano);
//                 monkeycoins.innerHTML = `Monkey Coins: ${cash}`;
//                 auras.innerHTML = `<span class="spanAuraTrofeu">Aura:</span>${aura}`;
//                 localStorage.setItem("cash", cash);
//                 localStorage.setItem("BarraVidaProta", BarraVidaProta);
//                 localStorage.setItem("aura", aura);
//             }

//         });
//     }
// }