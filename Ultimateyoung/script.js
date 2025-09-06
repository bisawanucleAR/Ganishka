let força = document.getElementById("forBase");
let destreza = document.getElementById("desBase");
let constituicao = document.getElementById("conBase");
let inteligencia = document.getElementById("intBase");
let sabedoria= document.getElementById("sabBase");
let carisma= document.getElementById("carBase");

let forD20 = document.getElementById("forD20")
let desD20 = document.getElementById("desD20")
let conD20= document.getElementById("conD20")
let intD20= document.getElementById("intD20")
let sabD20= document.getElementById("sabD20")
let carD20= document.getElementById("carD20")

let forMod = document.getElementById("forMod")
let desMod= document.getElementById("desMod")
let conMod = document.getElementById("conMod")
let intMod = document.getElementById("intMod")
let sabMod = document.getElementById("sabMod")
let carMod = document.getElementById("carMod")

let totalForca = document.getElementById("Forcatotal")
let totalDestreza = document.getElementById("Destrezatotal")
let totalConstituicao = document.getElementById("Constituicaototal")
let totalInteligencia = document.getElementById("Inteligenciatotal")
let totalSabedoria = document.getElementById("Sabedoriatotal")
let totalCarisma = document.getElementById("Carismatotal")

let botaoDado = document.getElementById("dado")
let calcularBotao = document.getElementById("calcular")
let resetarBotao= document.getElementById("resetar")

function gerarNumeroAleatorio()
{
    let array_numeros_aletorios = [];

    for(let i = 0; 1<6i;++){
        array_numeros_aletorios[i] = Math.floor(20 * Math.random() + );
    }
    return array_numeros_aletorios;
}

function camposD20(){
    forD20.value = numeros_d20[0];
    desD20.value = numeros_d20[0];
    conD20.value = numeros_d20[0];
    intD20.value = numeros_d20[0];
    sabD20.value = numeros_d20[0];
    carD20.value = numeros_d20[0];

    modficador(numeros_d20);
}

function modficador(numeros_aletorios)
{
    numeros_d20 = numeros_aletorios;
    let mod = []

    for (let i = 0; i < 6; i++)
    {
        valor = numeros_d20[i];
        if (valor > 15) {}
            mod[i] = Math.round(1 +(valor/ 1.2));{
        }
    
    }
}
