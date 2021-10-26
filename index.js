//Практика
const numberOfFilms = prompt('Сколько фильмов вы посмотрели?');
const lastFilms = prompt('Один из последних просмотренных фильмов?')
const raiting  = prompt('На сколько оцените его?')
const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        [lastFilms]: raiting 
    },
    actors:{},
    genres: [],
    privat: false
};
console.log(personalMovieDB);

