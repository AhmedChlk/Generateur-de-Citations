let button = document.querySelector('#button-new-quote');
console.log(button);
let texte = document.querySelector('.quote');
let writer = document.querySelector('.writer');

let quotes = [{
    quote: `« Je sais que je ne sais rien »`,
    writer: `Socrate`

},{
    quote: `« Les philosophes n'ont fait qu'interpréter le monde de différentes manières, ce qui importe, c’est de le transformer »`,
    writer: `Karl Marx`
}
];

button.addEventListener('click',function(){
    let rand = Math.floor(Math.random() * quotes.length);
    texte.textContent = quotes[rand].quote;
    writer.textContent = quotes[rand].writer;

})