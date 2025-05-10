function mostrarMensagem(){
    const nome = document.getElementById('nomeMae').value.trim();
    const mensagemdiv = document.getElementById('mensagem');

    if(nome){
        mensagemdiv.innerHTML= `<p class= "message">${nome}, você é uma mãe incrivel</p>`;

        mensagemdiv.innerHTML= `<p class= "warning">digite o nome da sua mae</p>`;
    }
}