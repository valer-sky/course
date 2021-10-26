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
const firstName = 'Valery' 
//const age = 37
//const isTeacher = 'Music'

//onsole.log(name, age, isTeacher)
//console.log('Имя человека' + firstName + 'возраст' + age + 'Он учитель' + isTeacher)
//console.log(age .toString)
//const lastName = prompt('Введите фамилию')
//alert(firstName + ' ' + lastName)
//Операторы
let currentYear = 2022
const birthYear = 1984
//const age = currentYear * birthYear
//console.log(age)
const a = 10
const b = 5
console.log (a + b)
console.log(a - b)
console.log(a* b)
console.log(a/b)
console.log(++currentYear)
console.log(currentYear)
console.log(--currentYear)
//Типы данных
const isTeacher = true
const dName =' Val'
const age = 35
let x
console.log(typeof isTeacher)
console.log(typeof dName)
console.log(typeof age)
console.log(typeof x)
const output = `
<div>This is div</div>
<p>This is o</p>`
console.log(output)
const arrow = name => console.log('Привет-', name)
arrow('Valery')