let menu = document.getElementById('menu')
let select = document.getElementById('numCards')
let start = document.getElementById('numCards')

for (let i = 4; i<=10; i+= 2){
    let n = i*i;
    let op = document.documentElement('option');
    op.value = n;
    op.innerHTML=n;

    select.appendChild(op);
}