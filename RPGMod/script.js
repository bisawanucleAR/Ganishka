function Mostraralerta(){
    alert ("Olá você foi alertado")
}


function somar(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let soma = num1+num2;
    document.getElementById("resultado").innerText = "resultado: " + soma;

}

function Subtrair(){
    let num3 = Number(document.getElementById("num3").value);
    let num4 = Number(document.getElementById("num4").value);
    let subtrair = num3-num4;
    document.getElementById("resultado").innerText = "resultado: " + subtrair;

}function dividir(){
    let num5 = Number(document.getElementById("num5").value);
    let num6 = Number(document.getElementById("num6").value);
    let dividir = num5/num6;
    document.getElementById("resultado").innerText = "resultado: " + dividir;

}

function multiplicar(){
    let num7 = Number(document.getElementById("num7").value);
    let num8 = Number(document.getElementById("num8").value);
    let multiplicar = num7*num8;
    document.getElementById("resultado").innerText = "resultado: " + multiplicar;

}
function mudarcor(){
document.body.style.background = "lightblue";
}

function sortear(){
    let numero = Math.floor(Math.random() * 10)+1;
    document.getElementById("resultado").innerText = "Numero sorteado: " + numero;
}

let Cliquers = 0;
function contar(){
    Cliquers++;
    document.getElementById("contador").innerText = "Numero de cliques: " + Cliquers;}