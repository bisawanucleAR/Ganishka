function urlBuilder(){}

let card = new CardManager(urlBuilder);
let board = new BoardManager("board", 50, card);

let menu = document.getElementById('menu');
let select = document.getElementById('numCards');
let start = document.getElementById('start');

for(let i = 4; i<=10; i+=2){
    let n = i*i;

    let op = document.createElement('option');

    op.value = n;
    op.innerHTML = n;
    select.appendChild(op);
}

start.addEventListener('click', () =>{
    menu.classList.add('hidden');
    board.node.classList.remove('hidden');
});

start.click();