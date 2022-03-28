//Stampa numeri da 1 a 100
//Per i multipli di 3 stampare Fizz
//Per i multipli di 5 stampare Buzz
//Per i multipli di 3 e 5 stampare FizzBuzz
//Appendere all'html il numero/stringa corretta
//Applica per ogni caso uno stile/colore differente
let Numberlist = document.getElementById('FizzBuzzList')

let Num = 100;

let title = document.createElement ('h1');
title.setAttribute('class', 'titolo');
title.innerHTML = 'FizzBuzzDom';
const row = document.createElement ('div');
row.setAttribute('class', 'row g-3');

for (i = 1; i <= Num; i++){
    const col = document.createElement ('div');
    col.setAttribute('class', 'col-6 col-sm-4 col-md-3 col-lg-2');
    const box = document.createElement('div');
    box.setAttribute('class', 'box');
    if (i % 3 === 0 && i % 5 === 0){
        box.innerHTML = `<p>FizzBuzz</p>`;
        box.classList.add('multiple-3-5');
    } else if (i % 3 === 0){
        box.innerHTML = `<p>Fizz</p>`;
        box.classList.add('multiple-3');
    } else if (i % 5 === 0){
        box.innerHTML = `<p>Buzz</p>`;
        box.classList.add('multiple-5');
    } else {
        box.innerHTML = `<p>${i}</p>`;
        box.classList.add('multiple');
    };

    row.append(col);
    col.append(box);
}

Numberlist.append(title, row);