// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import jQuery module (npm i -D jquery)

// require('~/app/libs/mmenu/js/jquery.mmenu.all.min.js') // import vendor jQuery plugin example (not module)


let count = 34;
/*console.log(count + 5);
console.log(count  - 5);
console.log(count  * 5);
console.log(count / 5);
console.log(count  % 5);
console.log(5 + 5);
*/
count *= 5;
console.log(count);
const animal_1 = 'cat'
const animal_2 = 'dog'
const animal_3 = 'mouse'

console.log(animal_2 + ' ' +  animal_3 + ' ' + animal_1);
for(let i = 0; i<10; i++){
    console.log(i)
}
function goShop(names){
    console.log(`Пришел ${names} в магазин`);
}
goShop ('Артем')
goShop ('Антон')
goShop ('Андрей')
console.log(document);

const mainBlockButton = document.querySelector('.main-block__button');
function showLog(alert){
    console.log(main-block__button);
}
('alert', showLog);
