function calcularDano(Forca, sorte){
var danoBase = forca *2;
var danoAdcional = Math.floor(Math.random() * sorte);
return danoBase = danoAdcional;
}

var forcaDoHeroi = 10;
var sorteDoHeroi = 5;
var dano = calcularDano(forcaDoHeroi, sorteDoHeroi);
console.log("Você causou" + dano+ "pontos de dano ao monstro")