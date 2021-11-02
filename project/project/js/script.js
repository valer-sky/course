/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// 1
const reklama = document.querySelector('.promo__adv');
// reklama.style = 'display: none'
reklama.textContent = ''
// 2
const genre = document.querySelector('.promo__genre');
genre.textContent = 'Драма'
// 3
const promo__bg = document.querySelector('.promo__bg');
promo__bg.style = 'background-image: url(img/bg.jpg);';
// 4
const list =document.querySelector('.promo__interactive-list');
list.textContent ='';
// 5
const newList = movieDB.movies.sort((film1, film2) => film1.localeCompare(film2));
 newList.forEach((film, index) => {
     list.innerHTML +=`
     <li class="promo__interactive-item">№${index +1}: ${film}
                            <div class="delete"></div>
                        </li>
     `
 })
// Оброботчик событий на клик
 const items = document.querySelectorAll('.promo__interactive-item');
  items.forEach((item) => {
      item.addEventListener('click', (event) => {
          console.log(event);
      })
  })
