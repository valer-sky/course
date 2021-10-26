//Практика
const numberOfFilms = prompt('Сколько фильмов вы посмотрели?');
const personalMovieDB = {
    count: 0,
    movies: [],
    actors:{},
    genres: [],
    privat: false
};
if (numberOfFilms > 0) {
    for(let i = 1; i <= numberOfFilms; i++){
        let lastFilms = prompt('Один из последних просмотренных фильмов?');
        
        while (!lastFilms || lastFilms.length === 0){
            lastFilms = prompt('Один из последних просмотренных фильмов?');
        }
        let raiting  = +prompt('На сколько оцените его? От 1 до 5');
        while(!(raiting >= 1 && raiting <=5)){
        raiting = +prompt('На сколько оцените его? От 1 до 5')
        }
        personalMovieDB.movies.push({[lastFilms]: raiting})
            
    }
} else alert ('Вы ввели некоректное значение');
if (personalMovieDB.count < 10){
    alert('Посмотрено довольно мало фильмов');

}else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    alert('Вы классический зритель')

}else if (personalMovieDB.count > 30){
    alert('Вы киноман')
}else alert('Произошла ошибка')



console.log(personalMovieDB);


